const switchIntent = (req, res, intent) => {
    switch (intent) {
        case 'Default Welcome Intent':
            defaultWelcomeIntent(req, res)
            break
        case 'Default Fallback Intent':
            defaultFallbackIntent(req, res)
            break
        case 'Help Intent':
            helpIntent(req, res)
            break
        case 'Farewell Intent':
            farewellIntent(req, res)
            break
    }
}

const defaultWelcomeIntent = (req, res) => {
    let response = {
        fulfillmentMessages: [
            {
                text: {
                    text: [
                          'Olá ! Seja muito bem-vindo.\n'
                        + 'Eu sou seu assistente pessoal e estou aqui para te atender.\n\n'
                        + 'Caso precise de ajuda ou queira ver as opções de atendimento digite "Ajuda".'
                    ]
                }
            },
            {
                text: {
                    text: [
                        'Como posso te ajudar hoje ?'
                    ]
                }
            }
        ]
    }

    res.send(response)
}

const defaultFallbackIntent = (req, res) => {
    let response = {
        fulfillmentMessages: [
            {
                text: {
                    text: [
                          'Desculpe, mas eu não entendi ou possivelmente eu não trato desses assuntos.\n\n'
                        + 'Caso precise de ajuda ou queira ver as opções de atendimento digite "Ajuda".'
                    ]
                }
            }
        ]
    }

    res.send(response)
}

const helpIntent = (req, res) => {
    let response = {
        fulfillmentMessages: [
            {
                text: {
                    text: [
                        'Estou aqui para te dar assistência em quaisquer problema técnico que você esteja passando.'
                    ]
                }
            },
            {
                text: {
                    text: [
                          'Por favor escolha uma das opções de acordo com sua necessidade:\n\n'
                        + 'Hardware: Problemas em seu aparelho ou periféricos.\n\n'
                        + 'Software: Problemas para utilizar um programa.\n\n'
                        + 'Menu do Usuário: Operações com sua conta pessoal.'
                    ]
                }
            },
            {
                card: {
                      title: 'Menu'
                    , buttons: [
                          { text: 'Hardware' }
                        , { text: 'Software' }
                        , { text: 'Menu do Usuário' }
                    ]
                }
            }
        ]
    }

    res.send(response)
}

const farewellIntent = (req, res) => {
    let response = {
        fulfillmentMessages: [
            {
                text: {
                    text: [
                        'Caso precise estarei sempre aqui para te atender.'
                    ]
                }
            },
            {
                text: {
                    text: [
                        'Até mais e obrigado pela preferência.'
                    ]
                }
            }
        ]
    }

    res.send(response)
}

const main = (req, res) => {
    const intent = req.body.queryResult.intent.displayName

    switchIntent(req, res, intent)
}

module.exports = {
    main
}