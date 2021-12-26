const router = require('express').Router()
const formattedMessage = require('../dialogflow/responseModels/message')
const eventTriggerWithParameters = require('../dialogflow/responseModels/eventTriggerWithParameters')

//Intents without external API call
const welcome = require('../dialogflow/intents/welcome')
const goodbye = require('../dialogflow/intents/goodbye')
const aboutMe = require('../dialogflow/intents/aboutMe')

//Intents with external API call
const getWeatherForecast = require('../dialogflow/intents/getWeatherForecast')


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
            const response = await getWeatherForecast(req.body.queryResult.parameters.cidade)
            res.send(eventTriggerWithParameters(event, response))
            // res.send(formattedMessage('Intent de clima'))
            break
        case 'GetIbgeData':
            console.log(req.body)
            // const response = await getWeatherForecast(req.body.queryResult.parameters.cidade)
            res.send(formattedMessage('Evento acionado'))
            break
        default:
            break;
    }
})


module.exports = router