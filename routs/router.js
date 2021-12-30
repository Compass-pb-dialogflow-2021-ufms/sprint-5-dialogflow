const router = require('express').Router()
const formattedMessage = require('../dialogflow/responseModels/message')
const eventTrigger = require('../dialogflow/responseModels/eventTrigger')
const eventGetServiceCallParametersTrigger = require('../dialogflow/responseModels/eventGetServiceCallParametersTrigger')

const welcome = require('../dialogflow/intents/welcome')
const goodbye = require('../dialogflow/intents/goodbye')
const hardwareProblem = require('../dialogflow/intents/hardwareProblem')
const getName = require('../dialogflow/intents/getName')


router.post('', (req, res)=>
{
    const intent = req.body.queryResult.intent.displayName
    switch(intent) 
    {
        case 'Welcome':
            res.send(formattedMessage(welcome()))
            break

            
        case 'TellTheSoftwareProblem':
            res.send(eventTrigger('name'))
            break


        case 'TellTheHardwareProblem':
            const hardwareProblemResponse = hardwareProblem(req.body.queryResult)
            if(hardwareProblemResponse.length < 5)
                res.send(eventTrigger(hardwareProblemResponse))
            else
                res.send(formattedMessage(hardwareProblemResponse))
            break


        case 'TellTheHardwareProblemNo':
            res.send(eventTrigger('name'))
            break


        case 'GetName':
            res.send(formattedMessage(getName(req)))
            break
            
            
        case 'GetNameYes':
            res.send(eventGetServiceCallParametersTrigger('serviceCall', req))
            break


        case 'GetNameNo':
            res.send(eventTrigger('changeName'))
            break
        

        case 'ChangeTheName':
            res.send(eventGetServiceCallParametersTrigger('serviceCall', req))
            break

        case 'GetServiceCallParameters':
            console.log(req.body.queryResult)
            res.send(formattedMessage('estamos com os dados'))
            break


        case 'KnowAboutMe':
            res.send(formattedMessage(goodbye()))
            break


        case 'Goodbye':
            res.send(formattedMessage(goodbye()))
            break
        default:
            break;
    }
})


module.exports = router