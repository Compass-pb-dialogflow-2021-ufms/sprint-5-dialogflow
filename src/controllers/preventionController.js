const { responseBuilder } = require('../util/index')

const messengerController = require('./messengerController')

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

module.exports = {
      preventionIntent
    , basicPreventionIntent
    , healthProfessionalPreventionIntent
}