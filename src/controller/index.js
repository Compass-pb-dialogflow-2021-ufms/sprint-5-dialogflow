const db = require("../db")
const functions = require("../functions")

const { Function } = require("../functions")
const { Intent } = require("../intentStrings")

const main = async (req, res) => {
    try {
        const { queryResult } = req.body
        const { displayName } = queryResult.intent
        
        let nickname = await functions.getNickname(req, db) //Get nickname from db, if there is one, else sets as empty
        let returningUser = await functions.recurrentUser(req, db) //Checks if user used bot before

        const dialog = new Function( { req, res } ) //Constructing dialog class
        const intents = new Intent( { returningUser, nickname, queryResult } ) //Constructing intents class

        //It is possible to implement this more dynamically, [e.g. displayName: () => dialog.answer(intents[displayName]())] but then functions need to be called inside intentSrings
        //and there are problems with calling events/contexts/other functions besides dialog.answer(), whose solutions make the code less readable and more redundant.
        //With this implementation, every call is readable and explicit.
        let mapping = {
            'Default Welcome Intent':   () => dialog.answer(intents.welcome()),
            'Default Goodbye Intent':   () => dialog.answer(intents.goodbye()),
            'Default Fallback Intent':  () => dialog.answer(intents.fallback()),
            'Nickname Intent':          () => dialog.answer(intents.nicknameStart()),
                'Nickname Intent - next':             () => { dialog.answer(intents.nicknameNext(req, db)) },
            'Menu - Contagion Intent':  () => dialog.answer(intents.contagion()),
                'Contagion Intent - Incubation':      () => dialog.answer(intents.contagion__incubation()),
                'Contagion Intent - Transmission':    () => dialog.answer(intents.contagion__transmission()),
                'Contagion Intent - Fallback':        () => dialog.answer(intents.__fallback()),
                'Contagion Intent - Fallback 2':      () => dialog.answer(intents.__fallbackExplicit()),
                'Contagion Intent - Fallback 3':      () => dialog.answer(intents.__fallbackFinal()),
            'Menu - Diagnostic Intent': () => dialog.answer(intents.diagnostic()),
                'Diagnostic Intent - Symptoms':       () => dialog.answer(intents.diagnostic__symptoms()),
                    'Diagnostic Intent - Symptoms - Fallback':       () => dialog.answer(intents.symptoms__fallback()),
                    'Diagnostic Intent - Symptoms - Fallback 2':     () => dialog.answer(intents.symptoms__fallbackImplicit()),
                    'Diagnostic Intent - Symptoms - Fallback 3':     () => dialog.answer(intents.symptoms__fallbackFinal()),
                'Diagnostic Intent - Medicine':       () => dialog.answer(intents.diagnostic__medicine()),
                    'Diagnostic Intent - Medicine - Yes':            () => dialog.answer(intents.diagnostic__medicine__yes()),
                    'Diagnostic Intent - Medicine - Fallback':       () => dialog.answer(intents.medicine__fallback()),
                    'Diagnostic Intent - Medicine - Fallback 2':     () => dialog.answer(intents.medicine__fallbackImplicit()),
                    'Diagnostic Intent - Medicine - Fallback 3':     () => dialog.answer(intents.medicine__fallbackFinal()),
                'Diagnostic Intent - Fallback':       () => dialog.answer(intents.diagnostic__fallback()),
                'Diagnostic Intent - Fallback 2':     () => dialog.answer(intents.diagnostic__fallbackImplicit()),
                'Diagnostic Intent - Fallback 3':     () => dialog.answer(intents.diagnostic__fallbackFinal()),
            'Menu - Prevention Intent': () => dialog.answer(intents.prevention()),
                'Prevention Intent - Basic':          () => dialog.answer(intents.prevention__basic()),
                'Prevention Intent - Professional':   () => dialog.answer(intents.prevention__professional()),
                'Prevention Intent - Fallback':       () => dialog.answer(intents.__fallback()),
                'Prevention Intent - Fallback 2':     () => dialog.answer(intents.__fallbackExplicit()),
                'Prevention Intent - Fallback 3':     () => dialog.answer(intents.__fallbackFinal()),
            'Menu - Cases Intent':      () => dialog.answer(intents.cases()),    
            'Menu - Others Intent':     () => dialog.answer(intents.other()),
            'Menu Only Intent':         () => dialog.answer(intents.menuLoop())
        }
        mapping[displayName]()

    } catch (error) {
        console.log(error)
    }
}

//EXPORTS-------

module.exports = {
    main
}
