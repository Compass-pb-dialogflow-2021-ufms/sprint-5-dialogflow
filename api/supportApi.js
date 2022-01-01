const Ticket = require('../models/ticketModel');

function welcomeUser(req, res) {
    const answers = ['Olá, sou o suporte tecnico digital\nEu posso te ajudar caso você tenha algum problema com seu computador\nSe for mais de um problema, me informe um de cada vez', 'Oi, aqui é o suporte tecnico digital, o que está acontecendo com seu computador ou software?']

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

function helpUser(req, res) {
    const answers = ['Eu sou o suporte tecnico digital, eu posso te ajudar caso você tenha algum problema com seu computador\nSe for mais de um problema, me informe um de cada vez', 'Aqui é o suporte digital, você pode me falar caso tenha algum problema com seu computador ou software que eu vou tentar te ajudar, se puder informe um problema por vez']

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
    const answers = ['Até mais', 'Até logo, espero ter ajudado', 'Tchau, espero ter conseguido resolver seu problema']

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

function hardWareProblem(req, res) {
    const hardWarePiece = req.body.queryResult.parameters.hardware
    const problemType = req.body.queryResult.parameters.tipoProblema

    if (!hardWarePiece) {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Me diga qual a peça de hardware que está com problema`,
                    ]
                }
            }]
        })
    }

    if (!problemType) {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Qual o problema do(a) ${hardWarePiece}`,
                    ]
                }
            }]
        })
    }

    return res.send({
        "followupEventInput": {
            "name": "solucao-paliativa",
            "parameters": {
                "hardware": `${hardWarePiece}`,
                "tipoProblema": `${problemType}`
            },
            "languageCode": "pt-BR"
        }
    })

}

function giveMinorSolution(req, res) {
    const hardWarePiece = req.body.queryResult.outputContexts[1].parameters.hardware;

    if (hardWarePiece === 'mouse' || hardWarePiece === 'teclado' || hardWarePiece === 'webcam') {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Sugiro que remova o fio do ${hardWarePiece} e conecte em outra USB em seu computador\nVerifique também se o fio não esta com mal contato\n`,
                        `O problema foi resolvido?`
                    ]
                }
            }]
        })
    }

    if (hardWarePiece === 'monitor') {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Verifique o cabo de energia do ${hardWarePiece}, obeserve se não esta com mal contato\nTambém de uma olhada cabo de imagem, é o que conecta no computador, retire e reconecte ele\nO problema foi resolvido?`,
                    ]
                }
            }]
        })
    }

    if (hardWarePiece === 'computador') {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Verifique o cabo de energia do ${hardWarePiece}, obeserve se não esta com mal contato\nVerifique se a tomada onde o dispositivo esta instalado esta funcionando corretamente\nO problema foi resolvido?`,
                    ]
                }
            }]
        })
    }

    if (hardWarePiece === 'impressora') {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Verifique o cabo de energia da ${hardWarePiece}, obeserve se não esta com mal contato\nVerifique se a tomada onde o dispositivo esta instalado esta funcionando, você também pode ver se os cartuchos de tinta estão instalados corretamente e também conferir a quantidade de tinta neles\nO problema foi resolvido?`,
                    ]
                }
            }]
        })
    }
}

function finishDialog(req, res) {
    const answers = ['Ok, obrigado pela sua paciência', 'Que bom! fico feliz em te ajudar', 'Boa! Qualquer problema é só me chamar']
    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    `${answers[Math.floor(Math.random() * 3)]}`
                ]
            }
        }]
    })
}

function askUserCreateTicket(req, res) {
    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    `Já que não conseguimos resolver dessa forma, preciso criar uma chamada\nVocê gostaria de criar um ticket para resolvermos seu problema?`
                ]
            }
        }]
    })
}

function redirectToCreateTicket(req, res) {

    return res.send({
        "followupEventInput": {
            "name": "criar-ticket",
            "languageCode": "pt-BR"
        }
    })
}

async function createTicket(req, res) {

    if (!req.body.queryResult.parameters.CPF) {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Qual o seu cpf? Informe somente os numeros, sem pontos e o traço`
                    ]
                }
            }]
        })
    }

    if (!req.body.queryResult.parameters.nome.name) {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Me fala seu nome, por favor`
                    ]
                }
            }]
        })
    }

    if (!req.body.queryResult.parameters.telefone) {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Qual o numero do seu telefone?`
                    ]
                }
            }]
        })
    }

    if (!req.body.queryResult.parameters.email) {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Qual o seu email?`
                    ]
                }
            }]
        })
    }

    description = req.body.queryResult.outputContexts[1].parameters.hardware + ' ' + req.body.queryResult.outputContexts[1].parameters.tipoProblema

    const ticket = {
        name: req.body.queryResult.parameters.nome.name,
        cpf: req.body.queryResult.parameters.CPF,
        phone: req.body.queryResult.parameters.telefone,
        email: req.body.queryResult.parameters.email,
        problemDecription: description
    }

    try {
        await Ticket.create(ticket)
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `${ticket.name}, a chamada foi realizada com sucesso, em breve entraremos em contato com você`
                    ]
                }
            }]
        })
    } catch {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Erro no servidor, não foi possuivel realizar uma chamada`
                    ]
                }
            }]
        })
    }
}

module.exports = {
    welcomeUser,
    helpUser,
    farewellUser,
    hardWareProblem,
    giveMinorSolution,
    finishDialog,
    askUserCreateTicket,
    redirectToCreateTicket,
    createTicket
}