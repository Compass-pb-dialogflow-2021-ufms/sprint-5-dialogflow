const format = JSON.parse(JSON.stringify({"outputContexts": [
    {
      "name": "projects/corona-bot-eahg/agent/sessions/session-id/contexts/context-name",
      "lifespanCount": 1,
    }
  ]}))


function context(sessionId, contextName)
{
    format.outputContexts[0].name = `projects/corona-bot-eahg/agent/sessions/${sessionId}/contexts/${contextName}`

    return format
}


module.exports = context