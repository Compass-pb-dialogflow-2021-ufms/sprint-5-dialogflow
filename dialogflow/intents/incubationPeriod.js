const responses = require('../../responses/responses')
const formattedMessage = require('../responseStructure/message')


function incubationPeriod(_, res)
{
    // const cardNames = ['Sim', 'Não, era só isso']
    res.send(formattedMessage(responses.incubationPeriod))
}


module.exports = incubationPeriod