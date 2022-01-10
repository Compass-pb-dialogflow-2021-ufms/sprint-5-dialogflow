const { responseBuilder } = require('../util/index')

const usersController = require('./usersController')
const messengerController = require('./messengerController')

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

module.exports = {
    mainMenuIntent
}