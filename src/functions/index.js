//FUNCTIONS------
/*let response

function getResponse(resp) { //It is possible to enable this function so the user does not need to pass res on answer() and nextEvent(). You need to export it
    response = resp          //and call functions.getResponse(res) once in the controller, but after developing, I personally found it less readable than just
}*/                          //passing res.

function answer(res, text) { //Basic structure for dialogflow fulfillmentText answer
    return res.json({ "fulfillmentText": text })
    //return response.json({ "fulfillmentText": text })
}

function nextEvent(res, eventName) { //Calls event passed as parameter, throws fallback if event does not exist.
    return res.json({
        "followupEventInput": {
          "name": eventName,
          "languageCode": "pt-BR",
          "parameters": {}
        }
      })
}

function userPlatform(req, id) { //returns ID based on user platform, currently supported: LINE, Telegram, Dialogflow Messenger and Dialogflow Console.
    if(id === 'line')
        return req.body.originalDetectIntentRequest.payload.data.source.userId
    if(id === 'telegram')
        return req.body.originalDetectIntentRequest.payload.data.from.id
    if(id === 'DIALOGFLOW_MESSENGER') //Dialogflow Messenger sends no source in body, needs to be hardcoded
        return req.body.session
    if(id === 'DIALOGFLOW_CONSOLE')
        return req.body.session
}

function randomize() { //Randomizer for answer variety
    rand = Math.random() < 0.5 ? 0 : 1;
}

function format(text) { //Strips accentuation from string. Useful for passing strings to URLs
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

//EXPORTS----------

module.exports = {
    //getResponse,
    answer,
    nextEvent,
    userPlatform,
    randomize,
    format
}