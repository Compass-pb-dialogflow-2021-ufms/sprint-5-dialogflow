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

function hardWareProblem(req, res) {
    const hardWarePiece = req.body.queryResult.parameters.hardware;
    const problemType = req.body.queryResult.parameters.tipoProblema;

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

function softWareProblem(req, res) {
    const softwareProgram = req.body.queryResult.parameters.software;
    const problemType = req.body.queryResult.parameters.problemaSoftware;

    if (!softwareProgram) {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Me diga qual o programa que está com problema`,
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
                        `Qual o problema do(a) ${softwareProgram}`,
                    ]
                }
            }]
        })
    }

    return res.send({
        "followupEventInput": {
            "name": "pergunta-criar-ticket",
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
                        `Sugiro que remova o fio do ${hardWarePiece} e conecte em outra USB em seu computador\nVerifique também se o fio não esta com mal contato\nO problema foi resolvido?`
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

    if (req.body.queryResult.queryText === 'pergunta-criar-ticket') {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Para o seu problem vou precisar criar uma chamada\nVocê quer criar uma chamada para o problema?`
                    ]
                }
            }]
        })
    } else {
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
                        `Qual o seu cpf?`
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

    const getContext = req.body.queryResult.outputContexts[1].name.split("/");

    if (getContext[getContext.length - 1] === 'hardwarecontext') {
        description = req.body.queryResult.outputContexts[1].parameters.hardware + ' ' + req.body.queryResult.outputContexts[1].parameters.tipoProblema
    } else {
        description = req.body.queryResult.outputContexts[1].parameters.software + ' ' + req.body.queryResult.outputContexts[1].parameters.problemaSoftware
    }

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
                        `Erro no servidor, não foi possuivel cadastrar uma chamada`
                    ]
                }
            }]
        })
    }
}

function askCpfTicket(req, res) {
    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    `Vou precisar do seu cpf para realizar a consulta\nInforme seu cpf, por favor`
                ]
            }
        }]
    })
}

async function getTicket(req, res) {

    const cpfUser = req.body.queryResult.parameters.cpf;

    const tickets = await Ticket.find({
        cpf: cpfUser
    })

    if (!tickets.length > 0) {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Nenhuma chamada cadastrada com esse cpf\nVocê pode me pedir ajuda a qualquer momento`
                    ]
                }
            }]
        })
    } else {
        let ticketData = '';

        for (let i = 0; i < tickets.length; i++) {
            ticketData += `Chamada ${i+1}\nNome: ${tickets[i].name}\nProblema: ${tickets[i].problemDecription}\nStatus: Em andamento\n`;
        }

        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `${ticketData}`
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
    createTicket,
    softWareProblem,
    askCpfTicket,
    getTicket
}