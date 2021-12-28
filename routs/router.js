const router = require('express').Router()
const formattedMessage = require('../dialogflow/responseModels/message')
const eventTrigger = require('../dialogflow/responseModels/eventTrigger')

const welcome = require('../dialogflow/intents/welcome')
const goodbye = require('../dialogflow/intents/goodbye')
const hardwareProblem = require('../dialogflow/intents/hardwareProblem')


router.post('', (req, res)=>
{
    const intent = req.body.queryResult.intent.displayName
    switch(intent) 
    {
        case 'Welcome':
            res.send(formattedMessage(welcome()))
            break

            
        case 'TellTheHardwareProblem':
            const hardwareProblemResponse = hardwareProblem(req.body.queryResult)
            if(hardwareProblemResponse.length < 5)
                res.send(eventTrigger(hardwareProblemResponse))
            else
                res.send(formattedMessage(hardwareProblemResponse))
            break


        case 'Goodbye':
            res.send(formattedMessage(goodbye()))
            break
        default:
            break;
    }
})


module.exports = router