const db = require("../db")
const functions = require("../functions")
const notion = require("../functions/notionAPI") 

const main = async (req, res) => {
    try {
        const { Function } = require("../functions")
        const dialog = new Function( { req, res } ) //Constructing dialog class

        const { queryResult, originalDetectIntentRequest } = req.body
        const { intent, parameters } = queryResult
        
        let platform = originalDetectIntentRequest.source ? originalDetectIntentRequest.source : "DIALOGFLOW_MESSENGER"
        let userId = functions.userPlatform(req, platform) //sets userId based on platform
        let nickname = await functions.getNickname(db, userId) //Get nickname from db, if there is one, else sets as empty
        let uid = await functions.checkUserId(req, db, userId, platform) //Checks if user already used bot, depending on platform (UserId or Session)

        const { Intent } = require("../intentStrings")
        const intents = new Intent( { uid, userId, nickname, queryResult } ) //Constructing intents class

        switch (intent.displayName) { //Cases by Intent----------------------------------
            //---------------------------------------------------------------------------
            case 'Default Welcome Intent':
                dialog.answer(intents.welcome()) 
            break
            //---------------------------------------------------------------------------
            case 'Default Goodbye Intent':
                dialog.answer(intents.goodbye())
            break
            //---------------------------------------------------------------------------
            case 'Default Fallback Intent':
                dialog.answer(intents.fallback())
            break
            //---------------------------------------------------------------------------
            case 'Help Intent':
                dialog.answer(intents.help())
            break
            //---------------------------------------------------------------------------
            case 'Nickname Intent':
                dialog.answer(intents.nicknameStart())
            break
            //---------------------------------------------------------------------------
            case 'Nickname Intent - next':
                if(nickname == '') //Only adds to mongoDB if nickname exists.
                    db.Nickname.create({ name : parameters["given-name"], userId : userId})
                
                dialog.answer(intents.nicknameNext()) //Dynamic msg 'added/not added'.
            break
            //---------------------------------------------------------------------------
            case 'Report Intent':
                try { //Pushes to both mongoDB and notion, else calls fallback.
                    db.Report.create( { name : parameters.person.name, phone: parameters.phone, email : parameters.email,
                                        cpf : functions.formatCpf(parameters.cpf), description : parameters.description } )
                    
                    notion.create(  parameters.person.name, parameters.phone, parameters.email, 
                                    functions.formatCpf(parameters.cpf), parameters.description )
                    
                    dialog.answerContext(intents.report(), "goodbyeContext", 1)
                } catch (error) {
                    dialog.answer(intents.reportFallback())
                }
            break
            //---------------------------------------------------------------------------
            case 'Diagnose Intent':
                dialog.answer(intents.diagnose())
            break
            //---------------------------------------------------------------------------
            
            //---------------------------------------------------------------------------
            case 'Diagnose Intent - fallback':
                dialog.answer(intents.diagnoseFallback())
            break
            //---------------------------------------------------------------------------
            case 'Diagnose Confirmation Intent':
                try { //Constructs next event name based on type 'hardware/software'.
                    dialog.nextEvent(intents.diagnoseConfirmation())
                } catch (error) { //Prevent trying to call non-existant event.
                    dialog.answer(intents.diagnoseConfirmationFallback())
                }
            break
            //---------------------------------------------------------------------------
            case 'Diagnose Intent - hardware':
                if(parameters.hardwareProblem[0] !== 'broken') {
                    dialog.answer(intents.diagnoseHardware())
                    break
                }
                dialog.nextEvent("callReport")
            break
            //---------------------------------------------------------------------------
            case 'Diagnose Intent - hardware - no':
                dialog.nextEvent("callReport")    
            break
            //---------------------------------------------------------------------------
            case 'Diagnose Intent - hardware - yes':
                dialog.nextEvent("goodbyeEvent")    
            break
            //---------------------------------------------------------------------------
            case 'Diagnose Intent - software':
                dialog.nextEvent("callReport")
            break
            //---------------------------------------------------------------------------
        }
    } catch (error) {    
        console.log(error)
    }
}

//EXPORTS-------

module.exports = {
    main
}
