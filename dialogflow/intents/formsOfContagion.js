const responses = require('../../responses/responses')
const formattedMessage = require('../responseStructure/message')


function formsOfContagion(_, res)
{
    // const cardNames = ['Sim', 'Não, era só isso']
    res.send(formattedMessage(responses.formsOfContagion))
}


module.exports = formsOfContagion