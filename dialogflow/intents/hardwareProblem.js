const responses = require('../../responses/responses')


function hardwareProblem(message)
{
    const userText = message.queryText

    if(userText.search('quebr') == -1)
        return responses.hardwareProblem
    else
    {
        const event = 'name'
        return event
    }
}


module.exports = hardwareProblem