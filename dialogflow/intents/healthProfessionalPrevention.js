const responses = require('../../responses/responses')
const formattedMessage = require('../responseStructure/message')


function healthProfessionalPrevention(res)
{
    // const chipsNames = ['Sim', 'Não, era só isso']
    res.send(formattedMessage([responses.healthProfessionalPrevention[0], responses.healthProfessionalPrevention[1]]))
}


module.exports = healthProfessionalPrevention