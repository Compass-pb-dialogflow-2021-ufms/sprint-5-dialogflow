const config = require("config")
const axios = require("axios")
const db = require("../db")
const functions = require("../functions")

const intents = async (req, res) => {
    try {

        const { queryResult, originalDetectIntentRequest } = req.body
        const { intent, parameters } = queryResult

        let displayName = intent.displayName
        let platform = originalDetectIntentRequest.source ? originalDetectIntentRequest.source : "DIALOGFLOW_MESSENGER"
        let userId = functions.userPlatform(req, platform) //sets userId based on platform

        //NICKNAME VERIFICATION START------------------------------------------------------------------
        try { //Checks if UserID exists on Nicknames DB. Note: This is separated in another DB from Platform because platform treats not only userId, but sessions aswell.
            username = await db.Nickname.findOne({
                userId : userId
            }).orFail()
        } catch (error) {
            username = {name: ""}
        }
        const nickname = username.name ? ', ' + username.name : '' //Formats string properly depending whether user has a nickname set
        //NICKNAME VERIFICATION END--------------------------------------------------------------------

        //USER-ID VERIFICATION START-------------------------------------------------------------------
        try { //Checks if UserID or Session exists on Platform DB, if it doesn't, adds to database depending on platform
            uid = await db.Platform.findOne({$or: [
                {userId : userId},
                {session : userId}

            ]}).orFail()
        } catch (error) {
            uid = { userId: "", session: "" }
            if((platform !== "DIALOGFLOW_CONSOLE") && (platform !== "DIALOGFLOW_MESSENGER")) //DialogFlow console and messenger do not have payloads, so they need to use sessions.
                db.Platform.create(originalDetectIntentRequest.payload.data.source) //Create User from payload from platform (userID)
            else
                db.Platform.create(req.body) //Create User from Dialogflow's session ID
        }
        //USER-ID VERIFICATION END---------------------------------------------------------------------

        switch (displayName) {
                
            //DEFAULT WELCOME INTENT START-------------------------------------------------------------
            case 'Default Welcome Intent':
                functions.randomize()
                try {
                    switch (rand) {
                        case 0:
                            if((uid.userId === userId) || (uid.session === userId))
                                functions.answer(res, `Olá! Que bom ver você novamente${nickname}! Default Welcome Intent.`)
                            else
                                functions.answer(res, `Olá! Default Welcome Intent! É um prazer te conhecer!`)
                        break
                    
                        case 1:
                            if((uid.userId === userId) || (uid.session === userId))
                                functions.answer(res, `Oi! Seja bem vindo de volta${nickname}! Default Welcome Intent!`)
                            else
                                functions.answer(res, `Oi! É um prazer lhe conhecer! Default Welcome Intent.`)
                        break
                    }

                } catch (error) {
                    console.log(error)
                } 
            break
            //DEFAULT WELCOME INTENT END---------------------------------------------------------------

            //DEFAULT GOODBYE INTENT START-------------------------------------------------------------
            case 'Default Goodbye Intent':
                functions.randomize()
                try {
                    switch (rand) {
                        case 0:
                                functions.answer(res, `Estou aqui sempre que precisar! Até mais${nickname}!`)
                        break
                    
                        case 1:
                                functions.answer(res, `Foi um prazer lhe ajudar hoje${nickname}.`)
                        break
                    }

                } catch (error) {
                    console.log(error)
                } 
            break
            //DEFAULT GOODBYE INTENT END---------------------------------------------------------------

            //DEFAULT FALLBACK INTENT START------------------------------------------------------------
            case 'Default Fallback Intent':
                functions.randomize()
                try {
                    switch (rand) {
                        case 0:
                                functions.answer(res, "Não consegui compreender o que você disse. Se estiver precisando, pode me pedir ajuda.")
                        break
                    
                        case 1:
                                functions.answer(res, "Desculpe, não entendi o que você quis dizer. Se precisar, basta me pedir ajuda.")
                        break
                    }

                } catch (error) {
                    console.log(error)
                } 
            break
            //DEFAULT FALLBACK INTENT END--------------------------------------------------------------

            //HELP INTENT START------------------------------------------------------------------------
            case 'Help Intent':
                functions.answer(res, 
                    `Entendi! Vamos lá${nickname}! Help Intent\n`
                    )
            break
            //HELP INTENT END--------------------------------------------------------------------------

            //NICKNAME INTENT START--------------------------------------------------------------------
            case 'Nickname Intent':
                functions.answer(res, "Certo, e como quer que eu te chame?")
            break
            //NICKNAME INTENT END----------------------------------------------------------------------

            //NICKNAME INTENT - NEXT START------------------------------------------------------------- //TODO - Implement change username
            case 'Nickname Intent - next':
                    try {
                        nicknames = await db.Nickname.findOne( {
                            userId : userId
                        } ).orFail()
                    } catch (error) {
                        nicknames = ''
                    }

                    if(nicknames !== '')
                        functions.answer(res, `Você já tem um nome cadastrado: ${nicknames.name}`)
                    else {
                        db.Nickname.create({ name : parameters["given-name"], userId : userId})
                        functions.answer(res, `Certo, te chamarei de ${parameters["given-name"]} a partir de agora!`)
                    }
            break
            //NICKNAME INTENT - NEXT END---------------------------------------------------------------
        }

    } catch (error) {    
            console.log(error)
    }

}

const log = (req, res) => {
    functions.answer(res, "GET sucessful")
}

//EXPORTS-------

module.exports = {
    intents,
    log
}
