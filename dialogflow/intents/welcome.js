const eventTrigger = require('../responseStructure/eventTrigger')
const messageWithQuickReplies = require('../responseStructure/messageWithQuickReplies')
const randomIntFromInterval = require('../../helpers/randomIntFromInterval')
const responses = require('../../responses/responses')
const TelegramUser = require('../../dataBase/models/telegramUser')


async function welcome(req, res)
{
    const quickRepliesOptions = ['Prevenção', 'Contágio', 'Casos no Brasil', 'Pré-diagnóstico', 'Outras dúvidas']
    const id = req.body.originalDetectIntentRequest.payload.data.from.id
    if(await TelegramUser.findOne({id: id}) == null)
    {
        await TelegramUser.create({id: id})
        const message = messageWithQuickReplies([responses.welcome[0], responses.welcome[randomIntFromInterval(2, 3)]], quickRepliesOptions)
        res.send(message)
    }
    else
        res.send(eventTrigger('mainMenu'))
}


module.exports = welcome