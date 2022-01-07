const responses = require('../../responses/responses')
const formattedMessage = require('../responseStructure/message')


function contagion(_, res)
{
    // const cardNames = ['Formas de contágio', 'Período de incubação']
    res.send(formattedMessage([responses.contagion[0], responses.contagion[1]]))
}


module.exports = contagion