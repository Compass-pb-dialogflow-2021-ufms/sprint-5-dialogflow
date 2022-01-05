const router = require('express').Router()


//Intents
const welcome = require('../dialogflow/intents/welcome')
const goodbye = require('../dialogflow/intents/goodbye')


router.post('', (req, res) => {
    const intent = req.body.queryResult.intent.displayName
    switch (intent) 
    {
        case 'Welcome':
            welcome(req, res)
            break

        case 'Goodbye':
            goodbye(req, res)
            break

        default:
            break
    }
})


module.exports = router