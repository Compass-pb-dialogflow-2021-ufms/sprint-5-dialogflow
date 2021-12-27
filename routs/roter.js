const router = require('express').Router()
const formattedMessage = require('../dialogflow/responseModels/message')
const eventTrigger = require('../dialogflow/responseModels/eventTrigger')
const eventGetIbgeDataTrigger = require('../dialogflow/responseModels/eventGetIbgeDataTrigger')

//Intents without external API call
const welcome = require('../dialogflow/intents/welcome')
const goodbye = require('../dialogflow/intents/goodbye')
const aboutMe = require('../dialogflow/intents/aboutMe')
const fallback = require('../dialogflow/intents/fallback/fallback')
const secondTimeInFallback = require('../dialogflow/intents/fallback/secondTimeInFallback')
const secondTimeInFallbackYes = require('../dialogflow/intents/fallback/secondTimeInFallback-yes')
const helpMenu = require('../dialogflow/intents/helpMenu')

//Intents with external API call
const getWeatherForecast = require('../dialogflow/intents/getWeatherForecast')
const getIbgeData = require('../dialogflow/intents/getIbgeData')


router.post('', async (req, res) => 
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


        case 'GetWeatherForecast':
            const event = 'IbgeData'
            const IbgeId = await getWeatherForecast(req.body.queryResult.parameters.cidade)
            if(IbgeId.length < 10)
                res.send(eventGetIbgeDataTrigger(event, IbgeId))
            else
                res.send(formattedMessage(IbgeId))
            break


        case 'GetIbgeData':
            const response = await getIbgeData(req.body.queryResult.parameters.id)
            res.send(formattedMessage(response))
            break


        case 'Fallback':
            res.send(formattedMessage(fallback())) 
            break

        
        case 'SecondTimeInFallback':
            res.send(formattedMessage(secondTimeInFallback())) 
            break


        case 'SecondTimeInFallbackYes':
            res.send(eventTrigger(secondTimeInFallbackYes())) 
            break


        case 'Help':
            res.send(formattedMessage(helpMenu())) 
            break
        default:
            break;
    }
})


module.exports = router