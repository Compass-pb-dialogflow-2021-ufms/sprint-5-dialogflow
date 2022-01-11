const eventTrigger = require('../responseStructure/eventTrigger')
const formattedContext = require('../responseStructure/context')
const formattedMessage = require('../responseStructure/message')
const getContextName = require('../../helpers/getContextName')
const messageWithQuickReplies = require('../responseStructure/messageWithQuickReplies')
const randomIntFromInterval = require('../../helpers/randomIntFromInterval')
const responses = require('../../responses/responses')
const TelegramUser = require('../../dataBase/models/telegramUser')


const intents = 
{
    'AboutMe': (_, res) => {res.send(formattedMessage(responses.aboutMe))},


    'Agree': (req, res) => {
        const contextParameters = getContextName(req)
        let contextName = contextParameters[0]
        console.log(contextName)
    
    
        if(typeof contextParameters == 'string' || contextName == 'default')
            res.send(eventTrigger('fallback'))
        else
        {
            contextName = (contextName.split('-'))[0]
            res.send(eventTrigger(responses.agree[contextName]))
        }
    },


    'BasicPrevention': (_, res) => {
        const quickRepliesOptions = ['Sim', 'Não, era só isso']
        res.send(messageWithQuickReplies(responses.basicPrevention, quickRepliesOptions))
    },


    'CasesInBrazil': (_, res) => {
        const quickRepliesOptions = ['Menu principal', 'Ajuda', 'Outras dúvidas']
        res.send(messageWithQuickReplies(responses.casesInBrazil, quickRepliesOptions))
    },


    'Contagion': (_, res) => {
        const quickRepliesOptions = ['Formas de contágio', 'Período de incubação']
        res.send(messageWithQuickReplies(responses.contagion, quickRepliesOptions))
    },


    'Desagree': (req, res) => {
        const contextParameters = getContextName(req)
        let contextName = contextParameters[0]
        console.log(contextName)
    
    
        if(typeof contextParameters == 'string' || contextName == 'default')
            res.send(eventTrigger('fallback'))
        else
        {
            contextName = (contextName.split('-'))[0]
            res.send(eventTrigger(responses.desagree[contextName]))
        }
    },



    'Fallback': (req, res) => {
        const contextParameters = getContextName(req)
        let contextName = contextParameters[0]    
    
        if(typeof contextParameters == 'string' || contextName == 'default')
            res.send(formattedMessage([responses.fallback.default[randomIntFromInterval(0, 3)]]))
        else
        {
            let message
            console.log('hori')
            const sessionId = contextParameters[1]
            const context = formattedContext(sessionId, contextName)
            contextName = (contextName.split('-'))[0]

            const changeToDefautl = ['prediagnosis']

            if(changeToDefautl.includes(contextName))
                message = formattedMessage([responses.fallback.default[randomIntFromInterval(0, 3)]])
            else
                message = formattedMessage(responses.fallback[contextName])
            
            message.outputContexts = context.outputContexts
            res.send(message)
        }
    },


    'FormsOfContagion': (_, res) => {
        const quickRepliesOptions = ['Sim', 'Não, era só isso']
        res.send(messageWithQuickReplies(responses.formsOfContagion, quickRepliesOptions))
    },


    'Goodbye': (req, res) => {
        let message
        const userInput = req.body.queryResult.fulfillmentMessages[0].text.text[0]
        const queryText = req.body.queryResult.queryText
        const hour = new Date().getHours()
        let greeting
    
        if(hour < 12)
            greeting = 'um bom dia'
        else if(hour < 19)
            greeting = 'uma boa tarde'
        else
            greeting = 'uma boa noite'
        
        if(queryText != 'goodbyeFallback' || userInput != '')
            message = formattedMessage([responses.goodbye[0], responses.goodbye[1](greeting)])
        else
            message = formattedMessage([responses.thirdTimeInFallback.prevention, responses.goodbye[0], responses.goodbye[1](greeting)])
    
        res.send(message)
    },


    'HealthProfessionalPrevention': (_, res) => {
        const quickRepliesOptions = ['Sim', 'Não, era só isso']
        res.send(messageWithQuickReplies(responses.healthProfessionalPrevention, quickRepliesOptions))
    },
    
    
    'Help': (_, res) => {
        const quickRepliesOptions = ['Contágio', 'Prevenção', 'Pré-diagnóstico']
        res.send(messageWithQuickReplies(responses.help, quickRepliesOptions))
    },


    'IncubationPeriod': (_, res) => {
        const quickRepliesOptions = ['Sim', 'Não, era só isso']
        res.send(messageWithQuickReplies(responses.incubationPeriod, quickRepliesOptions))
    },


    'MainMenu': (req, res) => {
        let message
        const quickRepliesOptions = ['Prevenção', 'Contágio', 'Casos no Brasil', 'Pré-diagnóstico', 'Outras dúvidas']
        const userInput = req.body.queryResult.fulfillmentMessages[0].text.text[0]
        const queryText = req.body.queryResult.queryText
    
    
        if(queryText != 'mainMenuWelcome' || userInput != '')
            message = messageWithQuickReplies([responses.mainMenu[0] + responses.mainMenu[randomIntFromInterval(1, 2)]], quickRepliesOptions)
        else
            message = messageWithQuickReplies([responses.welcome[1], responses.mainMenu[0] + responses.mainMenu[randomIntFromInterval(1, 2)]], quickRepliesOptions)
        
        res.send(message)    
    },


    'PreDiagnosis': (_, res) => {
        const quickRepliesOptions = ['Sim', 'Não']
        res.send(messageWithQuickReplies(responses.preDiagnosis, quickRepliesOptions))
    },


    'PreDiagnosisNo': (_, res) => {
        const quickRepliesOptions = ['Sim', 'Não, era só isso']
        res.send(messageWithQuickReplies(responses.preDiagnosisNo, quickRepliesOptions))
    },


    'Prevention': (_, res) => {
        const quickRepliesOptions = ['Prevenção básica', 'Prevenção do profissional']
        res.send(messageWithQuickReplies(responses.prevention, quickRepliesOptions))
    },


    'RiskGroup': (_, res) => {
        const quickRepliesOptions = ['Pertenço', 'Não pertenço']
        res.send(messageWithQuickReplies(responses.riskGroup, quickRepliesOptions))
    },


    'SecondTimeInFallback': (req, res) => {
        const contextParameters = getContextName(req)

        if(typeof contextParameters == 'string')
            res.send(formattedMessage(responses.secondTimeInFallback.default))
        else
        {
            let message
            let contextName = contextParameters[0]
            const sessionId = contextParameters[1]
            const context = formattedContext(sessionId, contextName)
            contextName = (contextName.split('-'))[0]
            const changeToDefautl = ['prediagnosis']

            if(changeToDefautl.includes(contextName))
                message = formattedMessage(responses.secondTimeInFallback.default)
            else
                message = formattedMessage(responses.secondTimeInFallback[contextName])
            
            message.outputContexts = context.outputContexts
            res.send(message) 
        }
    },


    'ThirdTimeInFallback': (req, res) => {
        const contextParameters = getContextName(req)

        if(typeof contextParameters == 'string')
            res.send(formattedMessage(responses.thirdTimeInFallback.default))
        else
        {
            let contextName = contextParameters[0]
            contextName = (contextName.split('-'))[0]
            const changeToDefautl = ['prediagnosis']

            if(changeToDefautl.includes(contextName))
                contextName = 'default'
    
            if(contextName == 'default')
                res.send(formattedMessage(responses.thirdTimeInFallback.default))
            else
                res.send(eventTrigger('goodbyeFallback'))
        }
    },


    'Welcome': async (req, res) => {
        const quickRepliesOptions = ['Prevenção', 'Contágio', 'Casos no Brasil', 'Pré-diagnóstico', 'Outras dúvidas']
        const id = req.body.originalDetectIntentRequest.payload.data.from.id
        if(await TelegramUser.findOne({id: id}) == null)
        {
            await TelegramUser.create({id: id})
            const message = messageWithQuickReplies([responses.welcome[0], responses.welcome[randomIntFromInterval(2, 3)]], quickRepliesOptions)
            res.send(message)
        }
        else
            res.send(eventTrigger('mainMenuWelcome'))
    }
}


module.exports = intents