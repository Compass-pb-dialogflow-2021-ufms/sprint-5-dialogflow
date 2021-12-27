const router = require('express').Router()


router.post('', (req, res)=>
{
    const intent = req.body.queryResult.intent.displayName
    switch(intent) 
    {
        case 'Welcome':
            break;
        default:
            break;
    }
})


module.exports = router