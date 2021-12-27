const router = require('express').Router()
const formattedMessage = require('../dialogflow/responseModels/message')
const eventTriggerWithParameters = require('../dialogflow/responseModels/eventTriggerWithParameters')

//Intents without external API call
const welcome = require('../dialogflow/intents/welcome')
const goodbye = require('../dialogflow/intents/goodbye')
const aboutMe = require('../dialogflow/intents/aboutMe')

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
                res.send(eventTriggerWithParameters(event, IbgeId))
            else
                res.send(formattedMessage(IbgeId))
            break
        case 'GetIbgeData':
            const response = await getIbgeData(req.body.queryResult.parameters.id)
            res.send(formattedMessage(response))
            break
        default:
            break;
    }
})


module.exports = router