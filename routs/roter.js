const router = require('express').Router()
const formattedMessage = require('../dialogflow/responseModels/message')

const welcome = require('../dialogflow/intents/welcome')
const goodbye = require('../dialogflow/intents/goodbye')
const aboutMe = require('../dialogflow/intents/aboutMe')


router.post('', (req, res) => 
{
    const intent = req.body.queryResult.intent.displayName
    switch (intent) {
        case 'Welcome':
            res.send(formattedMessage(welcome()))
            break
        case 'Goodbye':
            res.send(formattedMessage(goodbye()))
            break
        case 'KnowAboutMe':
            res.send(formattedMessage(aboutMe()))
            break
        default:
            break;
    }
})


module.exports = router