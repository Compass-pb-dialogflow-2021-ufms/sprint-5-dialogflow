const { responseBuilder, eventCall, getNoMatchCounter } = require("../util/index")

const messengerController = require('./messengerController')

const defaultFallbackIntent = (req) => {
    const texts = []
    const event = {}

    const contexts = req.body.queryResult.outputContexts
    const session = req.body.session
    const noMatchCounter = getNoMatchCounter(contexts, session)
    if (noMatchCounter === 1) {
        texts.push( messengerController.selectMessage('Fallback First Interaction Text') )
    } else if (noMatchCounter === 2) {
        texts.push( messengerController.selectMessage('Fallback Second Interaction Text') )
    } else {
        event.name = 'FallbackFarewellCall'

        return eventCall(event)
    }

    return responseBuilder(texts)
}

const preventionIntentFallback = (req) => {
    return preventionNContagionFallback(req)
}

const contagionIntentFallback = (req) => {
    return preventionNContagionFallback(req)
}

const preventionNContagionFallback = (req) => {
    const texts = []
    const event = {}

    const contexts = req.body.queryResult.outputContexts
    const session = req.body.session
    const noMatchCounter = getNoMatchCounter(contexts, session)
    if (noMatchCounter === 1) {
        texts.push( messengerController.selectMessage('Prevention & Contagion Fallback First Interaction Text')[0] )
        texts.push( messengerController.selectMessage('Prevention & Contagion Fallback First Interaction Text')[1] )
    } else if (noMatchCounter === 2) {
        texts.push( messengerController.selectMessage('Prevention & Contagion Fallback Second Interaction Text')[0] )
        texts.push( messengerController.selectMessage('Prevention & Contagion Fallback Second Interaction Text')[1] )
    } else {
        event.name = 'PreventionNContagionFallbackFarewellCall'

        return eventCall(event)
    }

    return responseBuilder(texts)
}

const riskGroupIntentFallback = (req) => {
    const texts = []
    const quickReplies = {}
    const event = {}

    const contexts = req.body.queryResult.outputContexts
    const session = req.body.session
    const noMatchCounter = getNoMatchCounter(contexts, session)
    if (noMatchCounter === 1) {
        texts.push( messengerController.selectMessage('Risk Groups Fallback First Interaction Text') )

        quickReplies.title = ( messengerController.selectMessage('Risk Groups Quick Replies').title )
        quickReplies.quickReplies = ( messengerController.selectMessage('Risk Groups Quick Replies').quickReplies )
    } else if (noMatchCounter === 2) {
        texts.push( messengerController.selectMessage('Risk Groups Fallback Second Interaction Text') )

        quickReplies.title = ( messengerController.selectMessage('Risk Groups Fallback Second Interaction Quick Replies').title )
        quickReplies.quickReplies = ( messengerController.selectMessage('Risk Groups Fallback Second Interaction Quick Replies').quickReplies )
    } else {
        event.name = 'PreDiagnosticFallbackFarewellCall'

        return eventCall(event)
    }

    return responseBuilder(texts, quickReplies)
}

const feverIntentFallback = (req) => {
    const texts = []
    const quickReplies = {}
    const event = {}

    const contexts = req.body.queryResult.outputContexts
    const session = req.body.session
    const noMatchCounter = getNoMatchCounter(contexts, session)
    if (noMatchCounter === 1) {
        contexts.push( messengerController.selectMessage('Fever Fallback First Interaction Text') )

        quickReplies.title = messengerController.selectMessage('Fever Fallback First Interaction Quick Replies').title
        quickReplies.quickReplies = messengerController.selectMessage('Fever Fallback First Interaction Quick Replies').quickReplies
    } else if (noMatchCounter === 2) {
        contexts.push( messengerController.selectMessage('Fever Fallback Second Interaction Text') )

        quickReplies.title = messengerController.selectMessage('Fever Quick Replies').title
        quickReplies.quickReplies = messengerController.selectMessage('Fever Quick Replies').quickReplies
    } else {
        event.name = 'PreDiagnosticFallbackFarewellCall'

        return eventCall(event)
    }

    return responseBuilder(texts, quickReplies)
}

const mildSymptomsFallback = (req) => {
    const texts = []
    const quickReplies = {}
    const event = {}

    const contexts = req.body.queryResult.outputContexts
    const session = req.body.session
    const noMatchCounter = getNoMatchCounter(contexts, session)
    if (noMatchCounter === 1) {
        texts.push( messengerController.selectMessage('Mild Symptoms Fallback First Interaction Text') )

        quickReplies.title = messengerController.selectMessage('Mild Symptoms Quick Replies').title
        quickReplies.quickReplies = messengerController.selectMessage('Mild Symptoms Quick Replies').quickReplies
    } else if (noMatchCounter === 2) {
        texts.push( messengerController.selectMessage('Mild Symptoms Fallback Second Interaction Text') )

        quickReplies.title = messengerController.selectMessage('Mild Symptoms Fallback First Interaction Quick Replies').title
        quickReplies.quickReplies = messengerController.selectMessage('Mild Symptoms Fallback First Interaction Quick Replies').quickReplies
    } else {
        event.name = 'PreDiagnosticFallbackFarewellCall'

        return eventCall(event)
    }

    return responseBuilder(texts, quickReplies)
}

const drugsTakenFallback = (req) => {
    const texts = []
    const quickReplies = {}
    const event = {}

    const contexts = req.body.queryResult.outputContexts
    const session = req.body.session
    const noMatchCounter = getNoMatchCounter(contexts, session)
    if (noMatchCounter === 1) {
        texts.push( messengerController.selectMessage('Drugs Taken Fallback First Interaction Text') )

        quickReplies.title = messengerController.selectMessage('Drugs Taken Fallback First Interaction Quick Replies').title
        quickReplies.quickReplies = messengerController.selectMessage('Drugs Taken Fallback First Interaction Quick Replies').quickReplies
    } else if (noMatchCounter === 2) {
        texts.push( messengerController.selectMessage('Drugs Taken Fallback Second Interaction Text') )

        quickReplies.title = messengerController.selectMessage('Drugs Taken Fallback Second Interaction Quick Replies').title
        quickReplies.quickReplies = messengerController.selectMessage('Drugs Taken Fallback Second Interaction Quick Replies').quickReplies
    } else {
        event.name = 'PreDiagnosticFallbackFarewellCall'

        return eventCall(event)
    }

    return responseBuilder(texts, quickReplies)
}

const gotWellFallback = (req) => {
    const texts = []
    const quickReplies = {}
    const event = {}

    const contexts = req.body.queryResult.outputContexts
    const session = req.body.session
    const noMatchCounter = getNoMatchCounter(contexts, session)
    if (noMatchCounter === 1) {
        texts.push( messengerController.selectMessage('Got Well Fallback First Interaction Text') )

        quickReplies.title = messengerController.selectMessage('Got Well Fallback First Interaction Quick Replies').title
        quickReplies.quickReplies = messengerController.selectMessage('Got Well Fallback First Interaction Quick Replies').quickReplies
    } else if (noMatchCounter === 2) {
        texts.push( messengerController.selectMessage('Got Well Fallback Second Interaction Text') )

        quickReplies.title = messengerController.selectMessage('Got Well Fallback Second Interaction Quick Replies').title
        quickReplies.quickReplies = messengerController.selectMessage('Got Well Fallback Second Interaction Quick Replies').quickReplies
    } else {
        event.name = 'PreDiagnosticFallbackFarewellCall'

        return eventCall(event)
    }

    return responseBuilder(texts, quickReplies)
}

const severeSymptomsFallback = (req) => {
    const texts = []
    const quickReplies = {}
    const event = {}

    const contexts = req.body.queryResult.outputContexts
    const session = req.body.session
    const noMatchCounter = getNoMatchCounter(contexts, session)
    if (noMatchCounter === 1) {
        texts.push( messengerController.selectMessage('Severe Symptoms Fallback First Interaction Text') )

        quickReplies.title = messengerController.selectMessage('Severe Symptoms Fallback First Interaction Quick Replies').title
        quickReplies.quickReplies = messengerController.selectMessage('Severe Symptoms Fallback First Interaction Quick Replies').quickReplies
    } else if (noMatchCounter === 2) {
        quickReplies.title = messengerController.selectMessage('Severe Symptoms Fallback Second Interaction Quick Replies').title
        quickReplies.quickReplies = messengerController.selectMessage('Severe Symptoms Fallback Second Interaction Quick Replies').quickReplies
    } else {
        event.name = 'PreDiagnosticFallbackFarewellCall'

        return eventCall(event)
    }

    return responseBuilder(texts, quickReplies)
}

module.exports = {
      defaultFallbackIntent
    , preventionIntentFallback
    , contagionIntentFallback
    , riskGroupIntentFallback
    , feverIntentFallback
    , mildSymptomsFallback
    , drugsTakenFallback
    , gotWellFallback
    , severeSymptomsFallback
}