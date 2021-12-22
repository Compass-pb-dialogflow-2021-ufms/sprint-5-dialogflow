const switchIntent = (req, res, intent) => {
    switch (intent) {
        case 'Default Welcome Intent':
            defaultWelcomeIntent(req, res)
            break
        case 'Default Fallback Intent':
            defaultFallbackIntent(req, res)
            break
        case 'Farewell Intent':
            farewellIntent(req, res)
            break
    }
}

const defaultWelcomeIntent = (req, res) => {
    const response = {
        fulfillmentText: [
              'Olá ! Sou seu metereologista pessoal.\n\n'
            + 'Posso dizer o clima de qualquer cidade do Brasil, quando precisar é só me chamar.'
        ]
    }

    res.send(response)
}

const defaultFallbackIntent = (req, res) => {
    const response = {
        fulfillmentText: [
            'Desculpe mas eu não trato desses assuntos.'
        ]
    }

    res.send(response)
}

const farewellIntent = (req, res) => {
    const response = {
        fulfillmentText: [
              'Sempre que precisar é só me chamar.\n'
            + 'Até mais e lembre-se, se for sair leve um casaquinho.'
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