const { responseBuilder, eventCall } = require('../util/index')

const messengerController = require('./messengerController')

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

    const mildSymptomsResponse = req.body.queryResult.parameters.response
    const mildSymptoms = req.body.queryResult.parameters.symptoms ? req.body.queryResult.parameters.symptoms.length : 0
    if (mildSymptomsResponse === 'Nenhum') {
        event.name = 'NoMildSymptomsSevereSymptomsCall'
    } else if (mildSymptomsResponse === 'Mais de três' || mildSymptoms > 3) {
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

module.exports = {
      preDiagnosticIntent
    , abortPreDiagnosticIntent
    , riskGroupsIntent
    , feverIntent
    , mildSymptomsIntent
    , mildSymptomsIntentFollowup
    , drugsTakenIntent
    , gotWellIntent
    , severeSymptomsIntent
}