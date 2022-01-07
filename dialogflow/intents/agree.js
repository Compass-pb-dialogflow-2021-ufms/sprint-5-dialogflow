const res = require('express/lib/response')
const formattedCards = require('../responseStructure/cards')


function agree(req, res)
{
    const cardNames = ['Prevenção', 'Contágio', 'Casos no Brasil', 'Pré-diagnóstico', 'Outras dúvidas']
    const card = formattedCards(cardNames)
    console.log(card)
    res.send(card)
}


module.exports = agree