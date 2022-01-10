const { responseBuilder } = require('../util/index')

const usersController = require('./usersController')
const messengerController = require('./messengerController')
const menuController = require('./menuController')

const defaultWelcomeIntent = async (userId) => {
    const texts = []
        , quickReplies = (await menuController.mainMenuIntent(userId)).fulfillmentMessages[0].quickReplies

    const userVerified = await usersController.userExists(userId)
    if (userVerified) {
        texts.push( messengerController.selectMessage('Welcome Again Text') )
    } else {
        texts.push( messengerController.selectMessage('Welcome Text') )

        await usersController.createUser(userId)
    }

    return responseBuilder(texts, quickReplies)
}

module.exports = {
    defaultWelcomeIntent
}