const router = require('express').Router()

//Intents
const aboutMe = require('../dialogflow/intents/aboutMe')
const agree = require('../dialogflow/intents/agree')
const basicPrevention = require('../dialogflow/intents/basicPrevention')
const casesInBrazil = require('../dialogflow/intents/casesInBrazil')
const contagion = require('../dialogflow/intents/contagion')
const fallback = require('../dialogflow/intents/fallback/fallback')
const formsOfContagion = require('../dialogflow/intents/formsOfContagion')
const goodbye = require('../dialogflow/intents/goodbye')
const healthProfessionalPrevention = require('../dialogflow/intents/healthProfessionalPrevention')
const incubationPeriod = require('../dialogflow/intents/incubationPeriod')
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
            agree(req, res)
            break

        case 'BasicPrevention':
            basicPrevention(res)
            break

        case 'CasesInBrazil':
            casesInBrazil(req, res)
            break

        case 'Contagion':
            contagion(req, res)
            break

        case 'Fallback':
            fallback(req, res)
            break

        case 'FormsOfContagion':
            formsOfContagion(req, res)
            break
            
        case 'Goodbye':
            goodbye(req, res)
            break
            
        case 'HealthProfessionalPrevention':
            healthProfessionalPrevention(res)
            break

        case 'IncubationPeriod':
            incubationPeriod(req, res)
            break

        case 'KnowAboutMe':
            aboutMe(req, res)
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