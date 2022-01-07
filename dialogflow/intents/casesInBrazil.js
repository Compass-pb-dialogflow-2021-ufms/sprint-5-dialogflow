const responses = require('../../responses/responses')
const formattedMessage = require('../responseStructure/message')


function casesInBrazil(_, res)
{
    res.send(formattedMessage([responses.casesInBrazil]))
}


module.exports = casesInBrazil