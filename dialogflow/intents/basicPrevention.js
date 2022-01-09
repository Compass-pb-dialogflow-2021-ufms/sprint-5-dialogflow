const responses = require('../../responses/responses')
const formattedMessage = require('../responseStructure/message')


function basicPrevention(res)
{
    // const chipsNames = ['Sim', 'Não, era só isso']
    res.send(formattedMessage(responses.basicPrevention))
}


module.exports = basicPrevention