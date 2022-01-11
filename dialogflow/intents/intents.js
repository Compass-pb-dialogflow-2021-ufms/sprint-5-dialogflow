const DiagnosisTelegram = require('../../dataBase/models/diagnosisTelegram')
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
            const sessionId = contextParameters[1]
            const context = formattedContext(sessionId, contextName)
            contextName = (contextName.split('-'))[0]

            const needQuickReplies = ['riskgroup', 'fever', 'minorsymptoms', 'takingmedicine', 'gotbetter']
            if(needQuickReplies.includes(contextName))
                message = messageWithQuickReplies([responses.fallback[contextName][0], responses.fallback[contextName][1]], responses.fallback[contextName][2])
            else
            {
                const changeToDefault = ['prediagnosis']
    
                if(changeToDefault.includes(contextName))
                    message = formattedMessage([responses.fallback.default[randomIntFromInterval(0, 3)]])
                else
                    message = formattedMessage(responses.fallback[contextName])
                
            }

            message.outputContexts = context.outputContexts
            res.send(message)
        }
    },


    'Fever': (req, res) => {
        const nameOfEvent = req.body.queryResult.queryText
        const quickRepliesOptions = ['Sim', 'Não']
        let adverb = ''

        if(nameOfEvent == 'feverNo')
            adverb = ' não'
        
        res.send(messageWithQuickReplies([responses.fever[0](adverb), responses.fever[1]], quickRepliesOptions))
    },


    'FeverNo': async (req, res) => {
        const id = req.body.originalDetectIntentRequest.payload.data.from.id
        await DiagnosisTelegram.findOneAndUpdate({id: id}, {fever: 'feverNo'})
        res.send(eventTrigger('minorSymptoms'))
    },


    'FeverYes': async (req, res) => {
        const id = req.body.originalDetectIntentRequest.payload.data.from.id
        await DiagnosisTelegram.findOneAndUpdate({id: id}, {fever: 'feverYes'})
        res.send(eventTrigger('minorSymptoms'))
    },


    'FormsOfContagion': (_, res) => {
        const quickRepliesOptions = ['Sim', 'Não, era só isso']
        res.send(messageWithQuickReplies(responses.formsOfContagion, quickRepliesOptions))
    },


    'Goodbye': (req, res) => {
        let message
        const userInput = req.body.queryResult.fulfillmentMessages[0].text.text[0]
        const nameOfEvent = req.body.queryResult.queryText
        const hour = new Date().getHours()
        let greeting
    
        if(hour < 12)
            greeting = 'um bom dia'
        else if(hour < 19)
            greeting = 'uma boa tarde'
        else
            greeting = 'uma boa noite'
        
        if(nameOfEvent != 'goodbyeFallback' || userInput != '')
            message = formattedMessage([responses.goodbye[0], responses.goodbye[1](greeting)])
        else
            message = formattedMessage([responses.thirdTimeInFallback.prevention, responses.goodbye[0], responses.goodbye[1](greeting)])
    
        res.send(message)
    },


    'GotBetter': (_, res) => {
        const quickRepliesOptions = ['Sim', 'Não']
        res.send(messageWithQuickReplies(responses.gotBetter, quickRepliesOptions))
    },


    'GotBetterNo': (_, res) => {res.send(eventTrigger('severeSymptoms'))},


    'GotBetterYes': async (req, res) => {
        const id = req.body.originalDetectIntentRequest.payload.data.from.id
        await DiagnosisTelegram.findOneAndUpdate({id: id}, {minorSymptoms: 'minorSymptomsNone'})
        res.send(eventTrigger('severeSymptomsWithoutFluMedicine'))
    },


    'HealthProfessionalPrevention': (_, res) => {
        const quickRepliesOptions = ['Sim', 'Não, era só isso']
        res.send(messageWithQuickReplies(responses.healthProfessionalPrevention, quickRepliesOptions))
    },
    
    
    'Help': (_, res) => {
        const quickRepliesOptions = ['Contágio', 'Prevenção', 'Pré-diagnóstico']
        res.send(messageWithQuickReplies(responses.help, quickRepliesOptions))
    },


    'HowManyMinorSymptoms': async (req, res) => {
        const id = req.body.originalDetectIntentRequest.payload.data.from.id
        const symptomsNumber = req.body.queryResult.parameters.number

        if(symptomsNumber == '' || symptomsNumber == 0)
        {
            await DiagnosisTelegram.findOneAndUpdate({id: id}, {minorSymptoms: 'minorSymptomsNone'})
            res.send(eventTrigger('severeSymptomsWithoutFlu'))
        }
        else if(symptomsNumber < 4)
        {
            await DiagnosisTelegram.findOneAndUpdate({id: id}, {minorSymptoms: 'minorSymptomsFew'})
            res.send(eventTrigger('takingMedicineFewSymptoms'))
        }
        else
        {
            await DiagnosisTelegram.findOneAndUpdate({id: id}, {minorSymptoms: 'minorSymptomsMany'})            
            res.send(eventTrigger('takingMedicine'))
        }
    },


    'IncubationPeriod': (_, res) => {
        const quickRepliesOptions = ['Sim', 'Não, era só isso']
        res.send(messageWithQuickReplies(responses.incubationPeriod, quickRepliesOptions))
    },


    'MainMenu': (req, res) => {
        let message
        const quickRepliesOptions = ['Prevenção', 'Contágio', 'Casos no Brasil', 'Pré-diagnóstico', 'Outras dúvidas']
        const userInput = req.body.queryResult.fulfillmentMessages[0].text.text[0]
        const nameOfEvent = req.body.queryResult.queryText
    
    
        if(nameOfEvent != 'mainMenuWelcome' || userInput != '')
            message = messageWithQuickReplies([responses.mainMenu[0] + responses.mainMenu[randomIntFromInterval(1, 2)]], quickRepliesOptions)
        else
            message = messageWithQuickReplies([responses.welcome[1], responses.mainMenu[0] + responses.mainMenu[randomIntFromInterval(1, 2)]], quickRepliesOptions)
        
        res.send(message)    
    },


    'MinorSymptoms': (_, res) => {
        const quickRepliesOptions = ['Nenhum', '1', '2', '3', '4 ou mais sintomas']
        res.send(messageWithQuickReplies(responses.minorSymptoms, quickRepliesOptions))
    },


    'PreDiagnosis': async (req, res) => {
        const quickRepliesOptions = ['Sim', 'Não']
        const id = req.body.originalDetectIntentRequest.payload.data.from.id
        if(await DiagnosisTelegram.findOne({id: id}) == null)
        {
            await DiagnosisTelegram.create({id: id, riskGroup: 'riskGroupNo', fever: 'feverNo', minorSymptoms: 'minorSymptomsNone', severeSymptoms: 'severeSymptomsNo'})
        }
    
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


    'RiskGroupNo': async (req, res) => {
        const id = req.body.originalDetectIntentRequest.payload.data.from.id
        await DiagnosisTelegram.findOneAndUpdate({id: id}, {riskGroup: 'riskGroupNo'})
        res.send(eventTrigger('feverNo'))
    },


    'RiskGroupYes': async (req, res) => {
        const id = req.body.originalDetectIntentRequest.payload.data.from.id
        await DiagnosisTelegram.findOneAndUpdate({id: id}, {riskGroup: 'riskGroupYes'})
        res.send(eventTrigger('feverYes'))
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

            const needQuickReplies = ['riskgroup', 'fever', 'minorsymptoms', 'takingmedicine', 'gotbetter']
            if(needQuickReplies.includes(contextName))
                message = messageWithQuickReplies([responses.secondTimeInFallback[contextName][0], responses.secondTimeInFallback[contextName][1]], responses.secondTimeInFallback[contextName][2])
            else
            {
                const changeToDefautl = ['prediagnosis']
    
                if(changeToDefautl.includes(contextName))
                    message = formattedMessage(responses.secondTimeInFallback.default)
                else
                    message = formattedMessage(responses.secondTimeInFallback[contextName])
            }
            
            message.outputContexts = context.outputContexts
            res.send(message) 
        }
    },


    'SevereSymptoms': (req, res) => {
        const nameOfEvent = req.body.queryResult.queryText
        const quickRepliesOptions = ['Sim', 'Não']

        if(nameOfEvent == 'severeSymptoms')
            res.send(messageWithQuickReplies([responses.severeSymptoms[2], responses.severeSymptoms[3]], quickRepliesOptions))
        else if(nameOfEvent == 'severeSymptomsWithoutFlu')
            res.send(messageWithQuickReplies([responses.severeSymptoms[0], responses.severeSymptoms[2], responses.severeSymptoms[3]], quickRepliesOptions))
        else
            res.send(messageWithQuickReplies([responses.severeSymptoms[1], responses.severeSymptoms[2], responses.severeSymptoms[3]], quickRepliesOptions))
    },


    'SevereSymptomsNo': async (req, res) => {
        const id = req.body.originalDetectIntentRequest.payload.data.from.id
        await DiagnosisTelegram.findOneAndUpdate({id: id}, {severeSymptoms: 'severeSymptomsNo'})
        res.send(eventTrigger('showDiagnosis'))
    },


    'SevereSymptomsYes': async (req, res) => {
        const id = req.body.originalDetectIntentRequest.payload.data.from.id
        await DiagnosisTelegram.findOneAndUpdate({id: id}, {severeSymptoms: 'severeSymptomsYes'})
        res.send(eventTrigger('showDiagnosis'))
    },


    'ShowDiagnosis': async (req, res) => {
        const id = req.body.originalDetectIntentRequest.payload.data.from.id
        const {riskGroup, fever, minorSymptoms, severeSymptoms} = await DiagnosisTelegram.findOne({id: id})
        res.send(formattedMessage(responses.showDiagnosis[riskGroup][fever][severeSymptoms][minorSymptoms]))
    },


    'TakingMedicine': (req, res) => {
        const nameOfEvent = req.body.queryResult.queryText
        const quickRepliesOptions = ['Sim', 'Não']
        let adverb = 'poucos'

        if(nameOfEvent == 'takingMedicine')
            adverb = 'vários'
        
        res.send(messageWithQuickReplies([responses.takingMedicine[0](adverb), responses.takingMedicine[1]], quickRepliesOptions))
    },


    'TakingMedicineNo': (_, res) => {res.send(eventTrigger('severeSymptoms'))},


    'TakingMedicineYes': (_, res) => {res.send(eventTrigger('gotBetter'))}, 


    'test': (req, res) => {
        console.log(req.body.queryResult)
        res.send(formattedMessage(['oi']))
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