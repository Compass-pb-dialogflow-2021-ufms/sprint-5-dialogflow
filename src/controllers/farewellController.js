const { responseBuilder } = require('../util/index')

const messengerController = require('./messengerController')

const farewellIntent = (req) => {
    const texts = []

    if (req.body.queryResult.queryText === 'FallbackFarewellCall') {
        texts.push( messengerController.selectMessage('Fallback Farewell Text')[0] )
        texts.push( messengerController.selectMessage('Fallback Farewell Text')[1] )
    } else {
        if (req.body.queryResult.queryText === 'PreventionNContagionFallbackFarewellCall') {
            texts.push( messengerController.selectMessage('Prevention N Contagion Fallback Farewell Text') )
        } else if (req.body.queryResult.queryText === 'PreDiagnosticFallbackFarewellCall') {
            texts.push( messengerController.selectMessage('Pre Diagnostic Fallback Farewell Text') )
        }

        texts.push( messengerController.selectMessage('Farewell Text')[0] )
        texts.push( messengerController.selectMessage('Farewell Text')[1] )
    }

    return responseBuilder(texts)
}

module.exports = {
    farewellIntent
}