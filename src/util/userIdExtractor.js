const userIdExtractor = (req) => {
    let userId

    const source = req.body.originalDetectIntentRequest.source
    switch (source) {
        case 'line':
            userId = req.body.originalDetectIntentRequest.payload.data.source.userId
            break
        case 'telegram':
            userId = req.body.originalDetectIntentRequest.payload.data.from.id
            break
    }

    return userId
}

module.exports = {
    userIdExtractor
}