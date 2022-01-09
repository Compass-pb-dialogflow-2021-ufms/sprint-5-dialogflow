const responses = require('../../responses/responses')
const formattedMessage = require('../responseStructure/message')


function aboutMe(_, res)
{
    res.send(formattedMessage(responses.aboutMe))
}


module.exports = aboutMe