const responses = require('../../responses/responses')
const formattedMessage = require('../responseStructure/message')
const formattedCards = require('../responseStructure/cards')
const TelegramUser = require('../../dataBase/models/telegramUser')
const randomIntFromInterval = require('../../helpers/randomIntFromInterval')


async function welcome(req, res)
{
    let message
    // const chipsNames = ['Prevenção', 'Contágio', 'Casos no Brasil', 'Pré-diagnóstico', 'Outras dúvidas']
    const id = req.body.originalDetectIntentRequest.payload.data.from.id
    if(await TelegramUser.findOne({id: id}) == null)
    {
        await TelegramUser.create({id: id})
        message = formattedMessage([responses.welcome[0], responses.welcome[randomIntFromInterval(3, 4)]])
    }
    else
    {
        message = formattedMessage([responses.welcome[1], responses.welcome[2] + '\n\n' + responses.welcome[randomIntFromInterval(3, 4)]])
    }
    res.send(message)
}


module.exports = welcome