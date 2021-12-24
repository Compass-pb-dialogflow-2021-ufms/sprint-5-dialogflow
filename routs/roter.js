const router = require('express').Router()


router.post('', (req, res) => 
{
    const intent = req.body.queryResult.intent.displayName
    console.log(intent)
})


module.exports = router