function getContextName(req)
{
    let contextName = 'default'
    const inputContexts = req.body.queryResult.outputContexts
    console.log(inputContexts)

    if(inputContexts.length > 0)
    {
        const exceptions = ['fallback-followup', '__system_counters__', 'secondtimeinfallback-followup', 'fallback']

        const contextNameDefault = ['goodbye', 'welcome']
    
        for(let i = 0; i < inputContexts.length; i++)
        {
            
            const aux = (inputContexts[i].name.split('contexts/'))[1]
            if(!exceptions.includes(aux))
            {
                contextName = aux
                i = inputContexts.length
            }
            else if(contextNameDefault.includes(aux))
            {
                contextName = 'default'
                i = inputContexts.length
            }
        }

        let sessionId = inputContexts[0].name.split('/contexts')
        sessionId = (sessionId[0].split('sessions/'))[1]

        return [contextName, sessionId]
    }
    else
        return 'default'
}


module.exports = getContextName