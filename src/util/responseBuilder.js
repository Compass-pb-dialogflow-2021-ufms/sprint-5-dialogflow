const responseBuilder = (texts, quickReplies) => {
    const response = {
        fulfillmentMessages: []
    }

    textInserter(response, texts)
    quickRepliesInserter(response, quickReplies)

    return response
}

const eventCall = (event) => {
    const response = {}

    eventInserter(response, event)

    return response
}

const textInserter = (response, texts) => {
    for (let x = 0; x < texts.length; x++) {
        response.fulfillmentMessages.push({
            text: {
                text: [ texts[x] ]
            }
        })
    }
}

const quickRepliesInserter = (response, quickReplies) => {
    response.fulfillmentMessages.push(
        { quickReplies: quickReplies }
    )
}

const eventInserter = (response, event) => {
    response.followupEventInput = event
}

module.exports = {
      responseBuilder
    , eventCall
}