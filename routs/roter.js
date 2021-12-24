const router = require('express').Router()
const formattedMessage = require('../dialogflow/responseModels/message')

const welcome = require('../dialogflow/intents/welcome')


router.post('', (req, res) => 
{
    const intent = req.body.queryResult.intent.displayName
    switch (intent) {
        case 'Welcome':
            res.send(formattedMessage(welcome()))
            break
        default:
            break;
    }
})


module.exports = router