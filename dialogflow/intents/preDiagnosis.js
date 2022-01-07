const responses = require('../../responses/responses')
const formattedMessage = require('../responseStructure/message')


function preDiagnosis(_, res)
{
    res.send(formattedMessage([responses.preDiagnosis]))
}


module.exports = preDiagnosis