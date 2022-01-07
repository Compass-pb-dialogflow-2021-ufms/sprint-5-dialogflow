const responses = require('../../responses/responses')
const formattedMessage = require('../responseStructure/message')


function basicPrevention(res)
{
    // const chipsNames = ['Sim', 'Não, era só isso']
    res.send(formattedMessage([responses.basicPrevention[0], responses.basicPrevention[1], responses.basicPrevention[2]]))
}


module.exports = basicPrevention