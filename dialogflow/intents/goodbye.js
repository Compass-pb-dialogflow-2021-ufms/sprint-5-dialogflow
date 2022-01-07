const responses = require('../../responses/responses')
const formattedMessage = require('../responseStructure/message')


function goodbye(req, res)
{
    let message
    const userInput = req.body.queryResult.fulfillmentMessages[0].text.text[0]
    const queryText = req.body.queryResult.queryText
    const hour = new Date().getHours()
    let greeting

    if(hour < 12)
        greeting = 'um bom dia'
    else if(hour < 19)
        greeting = 'uma boa tarde'
    else
        greeting = 'uma boa noite'
    
    if(queryText != 'goodbye' || userInput != '')
        message = formattedMessage([responses.goodbye[0], responses.goodbye[1](greeting)])
    else
        message = formattedMessage([responses.thirdTimeInFallback.prevention, responses.goodbye[0], responses.goodbye[1](greeting)])

    res.send(message)
}


module.exports = goodbye