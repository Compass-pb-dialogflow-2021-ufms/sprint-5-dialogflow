const eventFormat = JSON.parse(JSON.stringify(
    {
        "followupEventInput": {
            "name": "event-name",
            "languageCode": "pt-BR",
            "parameters": {
                "fullName": ""
            }
        }
    }))
    
    
    function eventGetServiceCallParametersTrigger(event, req)
    {
        const fullName = req.body.queryResult.outputContexts[0].parameters.fullName
        eventFormat.followupEventInput.name = event
        eventFormat.followupEventInput.parameters.fullName = fullName
        const eventRes = JSON.stringify(eventFormat)
    
        return eventRes
    }
    
    
    module.exports = eventGetServiceCallParametersTrigger