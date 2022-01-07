const { responseBuilder, eventCall, contextExists } = require('../util/index')

const usersController = require('./usersController')
const messengerController = require('./messengerController')
const fallbackController = require('./fallbackController')

const selectIntent = (intent, userId, req) => ({
      'Default Welcome Intent': defaultWelcomeIntent(userId)
    , 'Default Fallback Intent': fallbackController.defaultFallbackIntent(req)
    , 'Prevention Intent - fallback': fallbackController.preventionIntentFallback(req)
    , 'Contagion Intent - fallback': fallbackController.contagionIntentFallback(req)
    , 'Risk Groups Intent - fallback': fallbackController.riskGroupIntentFallback(req)
    , 'Fever Intent - fallback': fallbackController.feverIntentFallback(req)
    , 'Mild Symptoms Intent - fallback': fallbackController.mildSymptomsFallback(req)
    , 'Drugs Taken Intent - fallback': fallbackController.drugsTakenFallback(req)
    , 'Severe Symptoms Intent - fallback': fallbackController.severeSymptomsFallback(req)
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
    , 'Mild Symptoms Intent': mildSymptomsIntent()
    , 'Mild Symptoms Intent - Followup': mildSymptomsIntentFollowup(req)
    , 'Drugs Taken Intent': drugsTakenIntent(req)
    , 'Got Well Intent': gotWellIntent()
    , 'Severe Symptoms Intent': severeSymptomsIntent(req)
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
    const riskGroupsBoolResponse = req.body.queryResult.parameters.boolResponse
    if (riskGroupsResponse === 'Pertenço' || riskGroupsBoolResponse === 'Sim') {
        texts.push( messengerController.selectMessage('Risk Groups Response Text')[0] )
    } else {
        texts.push( messengerController.selectMessage('Risk Groups Response Text')[1] )
    }

    const quickReplies = messengerController.selectMessage('Fever Quick Replies')

    return responseBuilder(texts, quickReplies)
}

const mildSymptomsIntent = () => {
    const texts = messengerController.selectMessage('Mild Symptoms Text')
    const quickReplies = messengerController.selectMessage('Mild Symptoms Quick Replies')

    return responseBuilder(texts, quickReplies)
}

const mildSymptomsIntentFollowup = (req) => {
    const event = {}

    const mildSymptomsNumber = req.body.queryResult.parameters.response
    if (mildSymptomsNumber === 'Nenhum') {
        event.name = 'NoMildSymptomsSevereSymptomsCall'
    } else if (mildSymptomsNumber === 'Mais de três') {
        event.name = 'MoreThanThreeSymptomsDrugsTakenCall'
    } else {
        event.name = 'DrugsTakenCall'
    }

    return eventCall(event)
}

const drugsTakenIntent = (req) => {
    const texts = []

    const eventCalled = req.body.queryResult.queryText
    if (eventCalled === 'DrugsTakenCall') {
        texts.push( messengerController.selectMessage('Mild Symptoms Number Text')[0] )
    } else {
        texts.push( messengerController.selectMessage('Mild Symptoms Number Text')[1] )
    }

    const quickReplies = messengerController.selectMessage('Drugs Taken Quick Replies')

    return responseBuilder(texts, quickReplies)
}

const gotWellIntent = () => {
    const quickReplies = messengerController.selectMessage('Got Well Quick Replies')

    return responseBuilder([], quickReplies)
}

const severeSymptomsIntent = (req) => {
    const texts = []

    const eventCalled = req.body.queryResult.queryText
    if (eventCalled === 'NoMildSymptomsSevereSymptomsCall') {
        texts.push( messengerController.selectMessage('No Mild Symptoms Text')[0] )
    } else if (eventCalled === 'GotWellSevereSymptomsCall') {
        texts.push( messengerController.selectMessage('No Mild Symptoms Text')[1] )
    }

    texts.push( messengerController.selectMessage('Severe Symptoms Text') )

    const quickReplies = messengerController.selectMessage('Severe Symptoms Quick Replies')

    return responseBuilder(texts, quickReplies)
}

const yesIntent = (req) => {
    const event = {}

    const contexts = req.body.queryResult.outputContexts
    const feverResponse = req.body.queryResult.parameters.feverResult
    const drugsTakenResponse = req.body.queryResult.parameters.drugsTakenResponse
    if (contextExists('preventioncontext', req.body.session, contexts)
        || contextExists('contagioncontext', req.body.session, contexts)
        || contextExists('abortprediagnosticcontext', req.body.session, contexts))
    {
        event.name = 'MenuCall'
    } else if (contextExists('prediagnosticcontext', req.body.session, contexts)) {
        event.name = 'RiskGroupsCall'
    } else if (contextExists('risckgroupscontext', req.body.session, contexts)) {
        event.name = 'FeverCall'
    } else if (contextExists('fevercontext', req.body.session, contexts) || feverResponse === 'Tive febre') {
        event.name = 'MildSymptomsCall'
    } else if (contextExists('drugstakencontext', req.body.session, contexts) || drugsTakenResponse === 'Usei medicamentos') {
        event.name = 'GotWellCall'
    } else if (contextExists('gotwellcontext', req.body.session, contexts)) {
        event.name = 'GotWellSevereSymptomsCall'
    } else if (contextExists('severesymptomscontext', req.body.session, contexts)) {
        event.name = 'ResultCall'
    }

    return eventCall(event)
}

const noIntent = (req) => {
    const event = {}

    const contexts = req.body.queryResult.outputContexts
    const feverResponse = req.body.queryResult.parameters.feverResult
    const drugsTakenResponse = req.body.queryResult.parameters.drugsTakenResponse
    if (contextExists('preventioncontext', req.body.session, contexts)
        || contextExists('contagioncontext', req.body.session, contexts)
        || contextExists('abortprediagnosticcontext', req.body.session, contexts))
    {
        event.name = 'FarewellCall'
    } else if (contextExists('prediagnosticcontext', req.body.session, contexts)) {
        event.name = 'AbortPreDiagnosticCall'
    } else if (contextExists('risckgroupscontext', req.body.session, contexts)) {
        event.name = 'FeverCall'
    } else if (contextExists('fevercontext', req.body.session, contexts) || feverResponse === 'Não tive febre') {
        event.name = 'MildSymptomsCall'
    } else if (contextExists('drugstakencontext', req.body.session, contexts) || drugsTakenResponse === 'Não usei') {
        event.name = 'NoDrugsTakenSevereSymptomsCall'
    } else if (contextExists('gotwellcontext', req.body.session, contexts)) {
        event.name = 'StillSickSevereSymptoms'
    } else if (contextExists('severesymptomscontext', req.body.session, contexts)) {
        event.name = 'ResultCall'
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