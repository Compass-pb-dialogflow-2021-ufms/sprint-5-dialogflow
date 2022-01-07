const contextExists = (contextName, session, contexts) => {
    for (let x = 0; x < contexts.length; x++) {
        if (contexts[x].name === `${session}/contexts/${contextName}`) return true
    }

    return false
}

const getNoMatchCounter = (contexts, session) => {
    for (let x = 0; x < contexts.length; x++) {
        if (contexts[x].name === `${session}/contexts/__system_counters__`) return contexts[x].parameters['no-match']
    }
}

module.exports = {
      contextExists
    , getNoMatchCounter
}