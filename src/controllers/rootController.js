const welcomeController = require('./welcomeController')
const fallbackController = require('./fallbackController')
const farewellController = require('./farewellController')
const menuController = require('./menuController')
const preventionController = require('./preventionController')
const contagionController = require('./contagionController')
const brazilCasesController = require('./brazilCasesController')
const preDiagnosticController = require('./preDiagnosticController')
const resultController = require('./resultController')
const FAQController = require('./FAQController')
const yesNoController = require('./yesNoController')

const selectIntent = (intent, userId, req) => ({
      'Default Welcome Intent': welcomeController.defaultWelcomeIntent(userId)
    , 'Default Fallback Intent': fallbackController.defaultFallbackIntent(req)
    , 'Prevention Intent - fallback': fallbackController.preventionIntentFallback(req)
    , 'Contagion Intent - fallback': fallbackController.contagionIntentFallback(req)
    , 'Risk Groups Intent - fallback': fallbackController.riskGroupIntentFallback(req)
    , 'Fever Intent - fallback': fallbackController.feverIntentFallback(req)
    , 'Mild Symptoms Intent - fallback': fallbackController.mildSymptomsFallback(req)
    , 'Drugs Taken Intent - fallback': fallbackController.drugsTakenFallback(req)
    , 'Got Well Intent - fallback': fallbackController.gotWellFallback(req)
    , 'Severe Symptoms Intent - fallback': fallbackController.severeSymptomsFallback(req)
    , 'Farewell Intent': farewellController.farewellIntent(req)
    , 'Main Menu Intent': menuController.mainMenuIntent(userId)
    , 'Prevention Intent': preventionController.preventionIntent()
    , 'Basic Prevention Intent': preventionController.basicPreventionIntent()
    , 'Health Professional Prevention Intent': preventionController.healthProfessionalPreventionIntent()
    , 'Contagion Intent': contagionController.contagionIntent()
    , 'Contagion Forms Intent': contagionController.contagionFormsIntent()
    , 'Incubation Period Intent': contagionController.incubationPeriodIntent()
    , 'Brazil Cases Intent': brazilCasesController.brazilCasesIntent()
    , 'Pre Diagnostic Intent': preDiagnosticController.preDiagnosticIntent()
    , 'Abort Pre Diagnostic Intent': preDiagnosticController.abortPreDiagnosticIntent()
    , 'Risk Groups Intent': preDiagnosticController.riskGroupsIntent()
    , 'Fever Intent': preDiagnosticController.feverIntent(req)
    , 'Mild Symptoms Intent': preDiagnosticController.mildSymptomsIntent()
    , 'Mild Symptoms Intent - Followup': preDiagnosticController.mildSymptomsIntentFollowup(req)
    , 'Drugs Taken Intent': preDiagnosticController.drugsTakenIntent(req)
    , 'Got Well Intent': preDiagnosticController.gotWellIntent()
    , 'Severe Symptoms Intent': preDiagnosticController.severeSymptomsIntent(req)
    , 'Result Intent': resultController.resultIntent()
    , 'FAQ Intent': FAQController.FAQIntent()
    , 'Yes Intent': yesNoController.yesIntent(req)
    , 'No Intent': yesNoController.noIntent(req)
}[intent] || null)

const main = async (req, res) => {
    const intent = req.body.queryResult.intent.displayName
    const userId = req.body.originalDetectIntentRequest.payload.data.source.userId

    const response = await selectIntent(intent, userId, req)
    res.send(response)
}

module.exports = {
    main
}