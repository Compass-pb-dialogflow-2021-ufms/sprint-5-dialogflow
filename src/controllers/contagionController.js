const { responseBuilder } = require('../util/index')

const messengerController = require('./messengerController')

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

module.exports = {
      contagionIntent
    , contagionFormsIntent
    , incubationPeriodIntent
}