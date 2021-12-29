const {response} = require("express");
const responseBuilder = (texts, card) => {
    let response = {
        fulfillmentMessages: []
    }

    response = textInserter(response, texts)
    response = cardInserter(response, card)

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

    return response
}

const cardInserter = (response, card) => {
    response.fulfillmentMessages.push({
        card: card
    })

    return response
}

module.exports = {
    responseBuilder
}