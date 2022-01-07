const responses = require('../../../responses/responses')
const formattedMessage = require('../../responseStructure/message')
const formattedContext = require('../../responseStructure/context')
const getContextName = require('../../../helpers/getContextName')
const randomIntFromInterval = require('../../../helpers/randomIntFromInterval')


function fallback(req, res)
{
    const contextParameters = getContextName(req)
    let contextName = contextParameters[0]

    if(typeof contextParameters == 'string' || contextName == 'default')
        res.send(formattedMessage([responses.fallback.default[randomIntFromInterval(0, 3)]]))
    else
    {
        const sessionId = contextParameters[1]
        const context = formattedContext(sessionId, contextName)
        contextName = (contextName.split('-'))[0]

        const message = formattedMessage(responses.fallback[contextName])
        message.outputContexts = context.outputContexts

        res.send(message)
    }
}


module.exports = fallback