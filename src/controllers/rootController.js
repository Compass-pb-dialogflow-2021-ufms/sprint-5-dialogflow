const { responseBuilder } = require('../util/index')

const usersController = require('./usersController')
const messengerController = require('./messengerController')

const selectIntent = (intent, userId) => ({
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

const main = async (req, res) => {
    const intent = req.body.queryResult.intent.displayName
    const userId = req.body.originalDetectIntentRequest.payload.data.source.userId

    const response = await selectIntent(intent, userId)
    res.send(response)
}

module.exports = {
    main
}