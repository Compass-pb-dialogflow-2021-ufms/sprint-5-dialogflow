const responses = require('../../../responses/responses')
const formattedMessage = require('../../responseStructure/message')
const eventTrigger = require('../../responseStructure/eventTrigger')
const getContextName = require('../../../helpers/getContextName')


function thirdTimeInFallback(req, res)
{
    const contextParameters = getContextName(req)

    if(typeof contextParameters == 'string')
        res.send(formattedMessage([responses.thirdTimeInFallback.default]))
    else
    {
        let contextName = contextParameters[0]
        contextName = (contextName.split('-'))[0]

        if(contextName == 'default')
            res.send(formattedMessage(responses.thirdTimeInFallback.default))
        else
            res.send(eventTrigger('goodbye'))
    }
}


module.exports = thirdTimeInFallback