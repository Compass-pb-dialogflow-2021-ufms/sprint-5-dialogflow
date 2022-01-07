const router = require('express').Router()


//Intents
const basicPrevention = require('../dialogflow/intents/basicPrevention')
const fallback = require('../dialogflow/intents/fallback/fallback')
const goodbye = require('../dialogflow/intents/goodbye')
const healthProfessionalPrevention = require('../dialogflow/intents/healthProfessionalPrevention')
const prevention = require('../dialogflow/intents/prevention')
const secondTimeInFallback = require('../dialogflow/intents/fallback/secondTimeInFallback')
const thirdTimeInFallback = require('../dialogflow/intents/fallback/thirdTimeInFallback')
const welcome = require('../dialogflow/intents/welcome')


router.post('', (req, res) => {
    const intent = req.body.queryResult.intent.displayName
    // console.log(intent)
    // console.log(req.body.queryResult.outputContexts)
    switch (intent) 
    {
        case 'Agree':
            console.log(req.body.queryResult.outputContexts)
            break

        case 'BasicPrevention':
            basicPrevention(res)
            break

        case 'Fallback':
            fallback(req, res)
            break
            
        case 'Goodbye':
            goodbye(req, res)
            break
            
        case 'HealthProfessionalPrevention':
            healthProfessionalPrevention(res)
            break
            
        case 'Prevention':
            prevention(res)
            break

        case 'SecondTimeInFallback':
            secondTimeInFallback(req, res)
            break

        case 'ThirdTimeInFallback':
            thirdTimeInFallback(req, res)
            break

        case 'Welcome':
            welcome(req, res)
            break

        default:
            break
    }
})


module.exports = router