const responses = require('../../responses/responses')
const formattedMessage = require('../responseStructure/message')


function prevention(res)
{
    // const chipsNames = ['Prevenção básica', 'Prevenção do profissional']
    res.send(formattedMessage([responses.prevention[0], responses.prevention[1]]))
}


module.exports = prevention