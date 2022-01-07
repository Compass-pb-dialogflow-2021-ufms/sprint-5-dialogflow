const responses = require('../../../responses/responses')
const formattedMessage = require('../../responseStructure/message')
const formattedContext = require('../../responseStructure/context')
const getContextName = require('../../../helpers/getContextName')


function secondTimeInFallback(req, res)
{
    const contextParameters = getContextName(req)

    if(typeof contextParameters == 'string')
        res.send(formattedMessage([responses.secondTimeInFallback.default]))
    else
    {
        let contextName = contextParameters[0]
        const sessionId = contextParameters[1]
        const context = formattedContext(sessionId, contextName)
        contextName = (contextName.split('-'))[0]

        const message = formattedMessage(responses.secondTimeInFallback[contextName])
        message.outputContexts = context.outputContexts

        res.send(message) 
    }
}


module.exports = secondTimeInFallback