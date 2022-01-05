const responses = require('../../responses/responses')
const formattedMessage = require('../responseStructure/message')


function goodbye(req, res)
{
    const hour = new Date().getHours()
    let greeting

    if(hour < 13)
        greeting = 'um bom dia'
    else if(hour < 19)
        greeting = 'uma boa tarde'
    else
        greeting = 'uma boa noite'
    
    
    const message = formattedMessage([responses.goodbye[0], responses.goodbye[1](greeting)])
    res.send(message)
}


module.exports = goodbye