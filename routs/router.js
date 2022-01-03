const router = require('express').Router()
const formattedMessage = require('../dialogflow/responseModels/message')
const eventTrigger = require('../dialogflow/responseModels/eventTrigger')
const eventGetServiceCallParametersTrigger = require('../dialogflow/responseModels/eventGetServiceCallParametersTrigger')

const aboutMe = require('../dialogflow/intents/aboutMe')
const getName = require('../dialogflow/intents/getName')
const getServiceCallParameters = require('../dialogflow/intents/getServiceCallParameters')
const getStatus = require('../dialogflow/intents/getStatus')
const goodbye = require('../dialogflow/intents/goodbye')
const hardwareProblem = require('../dialogflow/intents/hardwareProblem')
const helpMenu = require('../dialogflow/intents/helpMenu')
const welcome = require('../dialogflow/intents/welcome')


router.post('', async (req, res)=>
{
    const intent = req.body.queryResult.intent.displayName
    switch(intent) 
    {
        case 'ChangeName':
            res.send(eventGetServiceCallParametersTrigger('serviceCall', req))
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
            
    
        case 'GetServiceCallParameters':
            res.send(formattedMessage(await getServiceCallParameters(req)))
            break
    
    
        case 'GetStatus':
            res.send(formattedMessage(await getStatus(req)))
            break


        case 'Goodbye':
            res.send(formattedMessage(goodbye()))
            break
        

        case 'Help':
            res.send(formattedMessage(helpMenu()))
            break


        case 'KnowAboutMe':
            res.send(formattedMessage(aboutMe()))
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

        
        case 'TellTheSoftwareProblem':
            res.send(eventTrigger('name'))
            break


        case 'Welcome':
            res.send(formattedMessage(welcome()))
            break


        default:
            break;
    }
})


module.exports = router