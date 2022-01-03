const router = require('express').Router()


router.post('', (req, res) => {
    const intent = req.body.queryResult.intent.displayName
    switch (intent) 
    {
        case value:
            
            break;
    
        default:
            break;
    }
})


module.exports = router