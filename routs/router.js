const router = require('express').Router()
const formattedMessage = require('../dialogflow/responseStructure/message')


//Intents
const welcome = require('../dialogflow/intents/welcome')


router.post('', (req, res) => {
    const intent = req.body.queryResult.intent.displayName
    // console.log(req.body.originalDetectIntentRequest.payload)
    switch (intent) 
    {
        case 'Welcome':
            welcome(req, res)
            break;
            
        default:
            break;
    }
})


module.exports = router