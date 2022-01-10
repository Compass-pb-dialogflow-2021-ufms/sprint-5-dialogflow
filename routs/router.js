const router = require('express').Router()
const intents = require('../dialogflow/intents/intents')


router.post('', (req, res) => {
    const intentName = req.body.queryResult.intent.displayName
    console.log(intentName)

    intents[intentName](req, res)
})


module.exports = router