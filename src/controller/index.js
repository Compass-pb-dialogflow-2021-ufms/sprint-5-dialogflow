const axios = require("axios")
const db = require("../db")

const intents = async (req, res) => {

    try {
        const { queryResult, originalDetectIntentRequest } = req.body
        const { intent, parameters } = queryResult

        let displayName = intent.displayName
        let platform = originalDetectIntentRequest.source ? originalDetectIntentRequest.source : "DIALOGFLOW_MESSENGER"
        userPlatform(req, platform) 
        
        try {
            uid = await db.Platform.findOne({$or: [
                {userId : userId},
                {session : userId}

            ]}).orFail()
        } catch (error) {
            uid = { userId: "", session: "" }
            if((platform !== "DIALOGFLOW_CONSOLE") && (platform !== "DIALOGFLOW_MESSENGER")) //DialogFlow console and messenger do not have payloads, so they need to use sessions.
                db.Platform.create(originalDetectIntentRequest.payload.data.source)
            else
                db.Platform.create(req.body)
        }

        switch (displayName) {
                
            //DEFAULT WELCOME INTENT START-------------------------------------------------------------
            case 'Default Welcome Intent':
                randomize()
                try {
                    switch (rand) {
                        case 0:
                            if((uid.userId === userId) || (uid.session === userId))
                                res.json(answer("Default Welcome Intent Variation 1! I know you~!"))
                            else
                                res.json(answer("Default Welcome Intent Variation 1!"))
                        break
                    
                        case 1:
                            if((uid.userId === userId) || (uid.session === userId))
                                res.json(answer("Default Welcome Intent Variation 2! I know you~!"))
                            else
                                res.json(answer("Default Welcome Intent Variation 2!"))
                        break
                    }

                } catch (error) {
                    console.log(error)
                } 
            break
            //DEFAULT WELCOME INTENT END---------------------------------------------------------------

            //DEFAULT GOODBYE INTENT START-------------------------------------------------------------
            case 'Default Goodbye Intent':
                randomize()
                try {
                    switch (rand) {
                        case 0:
                                res.json(answer("Default Goodbye Intent Variation 1!"))
                        break
                    
                        case 1:
                                res.json(answer("Default Goodbye Intent Variation 2!"))
                        break
                    }

                } catch (error) {
                    console.log(error)
                } 
            break
            //DEFAULT GOODBYE INTENT END---------------------------------------------------------------

            //DEFAULT FALLBACK INTENT START------------------------------------------------------------
            case 'Default Fallback Intent':
                randomize()
                try {
                    switch (rand) {
                        case 0:
                                res.json(answer("Default Fallback Intent Variation 1!"))
                        break
                    
                        case 1:
                                res.json(answer("Default Fallback Intent Variation 2!"))
                        break
                    }

                } catch (error) {
                    console.log(error)
                } 
            break
            //DEFAULT FALLBACK INTENT END--------------------------------------------------------------

            //CLIMATE INTENT START---------------------------------------------------------------------
            case 'Climate Intent':
                randomize()
                try {
                    switch (rand) {
                        case 0:
                                res.json(answer("Climate forecasting Intent Variation 1! " + parameters.location.city))
                        break
                    
                        case 1:
                                res.json(answer("Climate forecasting Intent Variation 2! " + parameters.location.city))
                        break
                    }

                } catch (error) {
                    console.log(error)
                } 
            break
            //CLIMATE INTENT END-----------------------------------------------------------------------
        }

    } catch (error) {    
            console.log(error)
    }

}

const log = (req, res) => {
    res.json(answer("GET sucessful"))
}

//basic structure for dialogflow fulfillmentText
function answer(text) {
    return { "fulfillmentText": text }
}

//sets ID based on user platform
function userPlatform(req, id) {
    if(id === 'line')
        userId = req.body.originalDetectIntentRequest.payload.data.source.userId
    if(id === 'telegram')
        userId = req.body.originalDetectIntentRequest.payload.data.from.id
    if(id === 'DIALOGFLOW_MESSENGER') //Dialogflow Messenger sends no source in body, needs to be hardcoded
        userId = req.body.session
    if(id === 'DIALOGFLOW_CONSOLE')
        userId = req.body.session
}

function randomize() {
    rand = Math.random() < 0.5 ? 0 : 1;
}

module.exports = {
    intents,
    log
}
