const axios = require("axios")

const intents = async (req, res) => {
    res.json(answer("POST sucessful"))
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
    if(id === 'DIALOGFLOW_MESSENGER') //check source
        //userId = req.body.session    //TODO
    if(id === 'DIALOGFLOW_CONSOLE')
        userId = req.body.session
}

module.exports = {
    intents,
    log
}
