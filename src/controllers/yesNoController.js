const { contextExists, eventCall } = require('../util/index')

const yesIntent = (req) => {
    const event = {}

    const contexts = req.body.queryResult.outputContexts
    const booleanResponse = req.body.queryResult.parameters.booleanResponse
    const preDiagnosticResponse = req.body.queryResult.parameters.preDiagnosticResponse
    const feverResponse = req.body.queryResult.parameters.feverResponse
    const drugsTakenResponse = req.body.queryResult.parameters.drugsTakenResponse
    const gotWellResponse = req.body.queryResult.parameters.gotWellResponse
    const severeSymptomsResponse = req.body.queryResult.parameters.severeSymptomsResponse
    if (contextExists('preventionend', req.body.session, contexts)
        || contextExists('contagionend', req.body.session, contexts)
        || contextExists('abortprediagnosticcontext', req.body.session, contexts)
        && booleanResponse)
    {
        event.name = 'MenuCall'
    } else if (contextExists('prediagnosticcontext', req.body.session, contexts) && (preDiagnosticResponse || booleanResponse)) {
        event.name = 'RiskGroupsCall'
    } else if (contextExists('risckgroupscontext', req.body.session, contexts)) {
        event.name = 'FeverCall'
    } else if (contextExists('fevercontext', req.body.session, contexts) && (feverResponse || booleanResponse)) {
        event.name = 'MildSymptomsCall'
    } else if (contextExists('drugstakencontext', req.body.session, contexts) && (drugsTakenResponse || booleanResponse)) {
        event.name = 'GotWellCall'
    } else if (contextExists('gotwellcontext', req.body.session, contexts) && (gotWellResponse || booleanResponse)) {
        event.name = 'GotWellSevereSymptomsCall'
    } else if (contextExists('severesymptomscontext', req.body.session, contexts) && (severeSymptomsResponse || booleanResponse)) {
        event.name = 'ResultCall'
    } else {
        event.name = 'FallbackCall'
    }

    return eventCall(event)
}

const noIntent = (req) => {
    const event = {}

    const contexts = req.body.queryResult.outputContexts
    const booleanResponse = req.body.queryResult.parameters.booleanResponse
    const preDiagnosticResponse = req.body.queryResult.parameters.preDiagnosticResponse
    const feverResponse = req.body.queryResult.parameters.feverResponse
    const drugsTakenResponse = req.body.queryResult.parameters.drugsTakenResponse
    const gotWellResponse = req.body.queryResult.parameters.gotWellResponse
    const severeSymptomsResponse = req.body.queryResult.parameters.severeSymptomsResponse
    if (contextExists('preventionend', req.body.session, contexts)
        || contextExists('contagionend', req.body.session, contexts)
        || contextExists('abortprediagnosticcontext', req.body.session, contexts)
        && booleanResponse)
    {
        event.name = 'FarewellCall'
    } else if (contextExists('prediagnosticcontext', req.body.session, contexts) && (preDiagnosticResponse || booleanResponse)) {
        event.name = 'AbortPreDiagnosticCall'
    } else if (contextExists('risckgroupscontext', req.body.session, contexts)) {
        event.name = 'FeverCall'
    } else if (contextExists('fevercontext', req.body.session, contexts) && (feverResponse || booleanResponse)) {
        event.name = 'MildSymptomsCall'
    } else if (contextExists('drugstakencontext', req.body.session, contexts) && (drugsTakenResponse || booleanResponse)) {
        event.name = 'NoDrugsTakenSevereSymptomsCall'
    } else if (contextExists('gotwellcontext', req.body.session, contexts) && (gotWellResponse || booleanResponse)) {
        event.name = 'StillSickSevereSymptoms'
    } else if (contextExists('severesymptomscontext', req.body.session, contexts) && (severeSymptomsResponse || booleanResponse)) {
        event.name = 'ResultCall'
    } else {
        event.name = 'FallbackCall'
    }

    return eventCall(event)
}

module.exports = {
      yesIntent
    , noIntent
}