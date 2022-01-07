const responses = require('../../responses/responses')
const formattedMessage = require('../responseStructure/message')


function formsOfContagion(_, res)
{
    // const cardNames = ['Sim', 'Não, era só isso']
    res.send(formattedMessage([responses.formsOfContagion[0], responses.formsOfContagion[1]]))
}


module.exports = formsOfContagion