const db = require("../db")
const functions = require("../functions")

const { Function } = require("../functions")
const { Intent } = require("../intentStrings")

const main = async (req, res) => {
    try {
        const { queryResult } = req.body
        const { displayName } = queryResult.intent
        
        let nickname = await functions.getNickname(req, db) //Get nickname from db, if there is one, else sets as empty
        let returningUser = await functions.recurrentUser(req, db) //Checks if user 

        const dialog = new Function( { req, res } ) //Constructing dialog class
        const intents = new Intent( { returningUser, nickname, queryResult } ) //Constructing intents class

        switch (displayName) { //Cases by Intent----------------------------------
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
                functions.updateNickname(req, db)
                dialog.answer(intents.nicknameNext()) //Dynamic msg 'added/not added'.
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
