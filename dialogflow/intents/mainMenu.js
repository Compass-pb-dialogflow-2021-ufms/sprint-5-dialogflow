const randomIntFromInterval = require('../../helpers/randomIntFromInterval')
const responses = require('../../responses/responses')
const messageWithQuickResponses = require('../responseStructure/messageWithQuickReplies')


function mainMenu(req, res)
{
    let message
    const quickRepliesOptions = ['Prevenção', 'Contágio', 'Casos no Brasil', 'Pré-diagnóstico', 'Outras dúvidas']
    const userInput = req.body.queryResult.fulfillmentMessages[0].text.text[0]
    const queryText = req.body.queryResult.queryText


    if(queryText != 'mainMenu' || userInput != '')
        message = messageWithQuickResponses([responses.mainMenu[0] + responses.mainMenu[randomIntFromInterval(1, 2)]], quickRepliesOptions)
    else
        message = messageWithQuickResponses([responses.welcome[1], responses.mainMenu[0] + responses.mainMenu[randomIntFromInterval(1, 2)]], quickRepliesOptions)
    
    res.send(message)

}


module.exports = mainMenu