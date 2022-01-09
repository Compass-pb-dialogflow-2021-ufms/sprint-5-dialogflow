const responses = require('../../responses/responses')
const messageWithQuickReplies = require('../responseStructure/messageWithQuickReplies')


function help(req, res)
{
    const quickRepliesOptions = ['Contágio', 'Prevenção', 'Pré-diagnóstico']
    const message = messageWithQuickReplies(responses.help, quickRepliesOptions)

    res.send(message)
}


module.exports = help