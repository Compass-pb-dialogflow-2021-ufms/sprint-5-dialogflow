const dbInfoCovid = require('../infoCovidDB/infoCovidDB');

async function welcomeUser(req, res) {

    dbInfoCovid.saveUserMessageId(req.body.originalDetectIntentRequest.payload.data.source.userId);

    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    `Olá, sou uma assistente virtual treinada para tirar suas duvidas relacionadas ao Coronavirus`,
                ]
            }
        }]
    })
}

function helpUser(req, res) {
    const answers = ['Eu sou uma assistente virtual treinada para tirar suas duvidas relacionadas ao Coronavirus, eu posso te ajudar caso você tenha algum problema com seu computador\nSe for mais de um problema, me informe um de cada vez', 'Aqui é o suporte digital, você pode me falar caso tenha algum problema com seu computador ou software que eu vou tentar te ajudar, se puder informe um problema por vez']

    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    `${answers[Math.floor(Math.random() * 2)]}`,
                ]
            }
        }]
    })
}

function farewellUser(req, res) {
    const answers = ['Até mais, quando precisar é só me avisar', 'Até logo, estarei aqui caso precise', 'Tchau, caso prescise estarei por aqui']

    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    `${answers[Math.floor(Math.random() *3)]}`,
                ]
            }
        }]
    })
}

module.exports = {
    welcomeUser,
    helpUser,
    farewellUser
}