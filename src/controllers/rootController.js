const { responseBuilder, eventCall } = require('../util/index')

const usersController = require('./usersController')
const messengerController = require('./messengerController')

const selectIntent = (intent, userId, req) => ({
      'Default Welcome Intent': defaultWelcomeIntent(userId)
    , 'Default Fallback Intent': defaultFallbackIntent()
    , 'Farewell Intent': farewellIntent()
    , 'Main Menu Intent': mainMenuIntent(userId)
    , 'Prevention Intent': preventionIntent()
    , 'Basic Prevention Intent': basicPreventionIntent()
    , 'Health Professional Prevention Intent': healthProfessionalPreventionIntent()
    , 'Contagion Intent': contagionIntent()
    , 'Contagion Forms Intent': contagionFormsIntent()
    , 'Incubation Period Intent': incubationPeriodIntent()
    , 'Pre Diagnostic Intent': preDiagnosticIntent()
    , 'Abort Pre Diagnostic Intent': abortPreDiagnosticIntent()
    , 'Risk Groups Intent': riskGroupsIntent()
    , 'Fever Intent': feverIntent(req)
    , 'Yes Intent': yesIntent(req)
    , 'No Intent': noIntent(req)
}[intent] || null)

const defaultWelcomeIntent = async (userId) => {
    const texts = []
        , quickReplies = (await mainMenuIntent(userId)).fulfillmentMessages[0].quickReplies

    const userVerified = await usersController.userExists(userId)
    if (userVerified) {
        texts.push( messengerController.selectMessage('Welcome Again Text') )
    } else {
        texts.push( messengerController.selectMessage('Welcome Text') )

        await usersController.createUser(userId)
    }

    return responseBuilder(texts, quickReplies)
}

const defaultFallbackIntent = () => {}

const farewellIntent = () => {
    const texts = messengerController.selectMessage('Farewell Text')

    return responseBuilder(texts)
}

const mainMenuIntent = async (userId) => {
    const quickReplies = {}

    const userVerified = await usersController.userExists(userId)
    if (userVerified) {
        quickReplies.title = messengerController.selectMessage('Main Menu Quick Replies Titles')
    } else {
        quickReplies.title = messengerController.selectMessage('First Main Menu Quick Replies Titles')
    }

    quickReplies.quickReplies = messengerController.selectMessage('Main Menu Quick Replies')

    return responseBuilder([], quickReplies)
}

const preventionIntent = () => {
    const texts = messengerController.selectMessage('Prevention Text')
    const quickReplies = messengerController.selectMessage('Prevention Quick Replies')

    return responseBuilder(texts, quickReplies)
}

const basicPreventionIntent = () => {
    const texts = messengerController.selectMessage('Basic Prevention Text')
    const quickReplies = messengerController.selectMessage('Basic Prevention Quick Replies')

    return responseBuilder(texts, quickReplies)
}

const healthProfessionalPreventionIntent = () => {
    const texts = messengerController.selectMessage('Health Professional Prevent Text')
    const quickReplies = messengerController.selectMessage('Need More Help Quick Replies')

    return responseBuilder(texts, quickReplies)
}

const contagionIntent = () => {
    const texts = messengerController.selectMessage('Contagion Text')
    const quickReplies = messengerController.selectMessage('Contagion Quick Replies')

    return responseBuilder(texts, quickReplies)
}

const contagionFormsIntent = () => {
    const texts = messengerController.selectMessage('Contagion Forms Text')
    const quickReplies = messengerController.selectMessage('Need More Help Quick Replies')

    return responseBuilder(texts, quickReplies)
}

const incubationPeriodIntent = () => {
    const texts = messengerController.selectMessage('Incubation Period Text')
    const quickReplies = messengerController.selectMessage('Need More Help Quick Replies')

    return responseBuilder(texts, quickReplies)
}

const preDiagnosticIntent = () => {
    const texts = messengerController.selectMessage('Pre Diagnostic Text')
    const quickReplies = messengerController.selectMessage('Pre Diagnostic Quick Replies')

    return responseBuilder(texts, quickReplies)
}

const abortPreDiagnosticIntent = () => {
    const texts = messengerController.selectMessage('Abort Pre Diagnostic Text')
    const quickReplies = messengerController.selectMessage('Need More Help Quick Replies')

    return responseBuilder(texts, quickReplies)
}

const riskGroupsIntent = () => {
    const texts = messengerController.selectMessage('Risk Groups Text')
    const quickReplies = messengerController.selectMessage('Risk Groups Quick Replies')

    return responseBuilder(texts, quickReplies)
}

const feverIntent = (req) => {
    const texts = []

    const riskGroupsResponse = req.body.queryResult.parameters.response
    if (riskGroupsResponse === 'Pertenço') {
        texts.push( messengerController.selectMessage('Risk Groups Response Text')[0] )
    } else {
        texts.push( messengerController.selectMessage('Risk Groups Response Text')[1] )
    }

    const quickReplies = messengerController.selectMessage('Fever Quick Replies')

    return responseBuilder(texts, quickReplies)
}

const yesIntent = (req) => {
    const event = {}

    const context = (req.body.queryResult.outputContexts[0].name).substring(97)
    if (context === 'preventioncontext' || context === 'contagioncontext' || context === 'abortprediagnosticcontext') {
        event.name = 'MenuCall'
    } else if (context === 'prediagnosticcontext') {
        event.name = 'RiskGroupsCall'
    } else if (context === 'fevercontext') {

    }

    return eventCall(event)
}

const noIntent = (req) => {
    const event = {}

    const context = (req.body.queryResult.outputContexts[0].name).substring(97)
    if (context === 'preventioncontext' || context === 'contagioncontext' || context === 'abortprediagnosticcontext') {
        event.name = 'FarewellCall'
    } else if (context === 'prediagnosticcontext') {
        event.name = 'AbortPreDiagnosticCall'
    } else if (context === 'fevercontext') {

    }

    return eventCall(event)
}

const main = async (req, res) => {
    const intent = req.body.queryResult.intent.displayName
    const userId = req.body.originalDetectIntentRequest.payload.data.source.userId

    const response = await selectIntent(intent, userId, req)
    res.send(response)
}

module.exports = {
    main
}