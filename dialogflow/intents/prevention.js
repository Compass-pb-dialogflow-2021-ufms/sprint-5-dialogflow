const responses = require('../../responses/responses')
const formattedMessage = require('../responseStructure/message')


function prevention(res)
{
    // const cardNames = ['Prevenção básica', 'Prevenção do profissional']
    res.send(formattedMessage(responses.prevention))
}


module.exports = prevention