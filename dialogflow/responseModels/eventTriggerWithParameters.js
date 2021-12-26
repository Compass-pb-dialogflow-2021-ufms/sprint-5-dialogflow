const eventFormat = JSON.parse(JSON.stringify(
    {
        "followupEventInput": {
            "name": "event-name",
            "languageCode": "pt-BR",
            "parameters": {
                "id": ""
            }
        }
    }))
    
    
    function eventTrigger(event, parameter)
    {
        eventFormat.followupEventInput.name = event
        eventFormat.followupEventInput.parameters.id = parameter
        const eventRes = JSON.stringify(eventFormat)
    
        return eventRes
    }
    
    
    module.exports = eventTrigger