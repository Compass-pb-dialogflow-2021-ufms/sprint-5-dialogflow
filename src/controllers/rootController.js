const {
      responseBuilder
    , userIdExtractor
} = require('../util/index')

const usersController = require('./usersController')
const serviceRequestsController = require('./serviceRequestsController')

const switchIntent = (req, res, intent, userId) => {
    switch (intent) {
        case 'Default Welcome Intent':
            defaultWelcomeIntent(req, res, userId)
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

const defaultWelcomeIntent = async (req, res, userId) => {
    let texts

    try {
        const userVerified = await usersController.userExists(userId)
        if (userVerified){
            texts = [
                  'Bem-vindo de volta !\n'
                + 'Lembrando que caso precise de ajuda ou queira relembrar minhas opções de atendimento digite "Ajuda"'
                , 'Como posso te ajudar dessa vez ?'
            ]
        } else {
            texts = [
                  'Olá ! Seja muito bem-vindo.\n'
                + 'Eu sou seu assistente pessoal e estou aqui para te atender.\n\n'
                + 'Caso precise de ajuda ou queira ver as opções de atendimento digite "Ajuda".'
                , 'Como posso te ajudar hoje ?'
            ]

            await usersController.createUser(userId)
        }

        const response = responseBuilder(texts)
        res.send(response)
    } catch {

    }
}

const defaultFallbackIntent = (req, res) => {
    let texts = [
          'Desculpe, mas eu não entendi ou possivelmente eu não trato desses assuntos.\n\n'
        + 'Caso precise de ajuda ou queira ver as opções de atendimento digite "Ajuda".'
    ]

    const response = responseBuilder(texts)
    res.send(response)
}

const helpIntent = (req, res) => {
    let texts = [
          'Estou aqui para te dar assistência em quaisquer problema técnico que você esteja passando.'
        , 'Por favor escolha uma das opções de acordo com sua necessidade:\n\n'
        + 'Hardware: Problemas em seu aparelho ou periféricos.\n\n'
        + 'Software: Problemas para utilizar um programa.\n\n'
        + 'Menu do Usuário: Operações com sua conta pessoal.'
    ]

    let card = {
          title: 'Menu'
        , buttons: [
              { text: 'Hardware' }
            , { text: 'Software' }
            , { text: 'Menu do Usuário' }
        ]
    }

    const response = responseBuilder(texts, card)
    res.send(response)
}

const farewellIntent = (req, res) => {
    let texts = [
          'Caso precise estarei sempre aqui para te atender.'
        , 'Até mais e obrigado pela preferência.'
    ]

    const response = responseBuilder(texts)
    res.send(response)
}

const main = async (req, res) => {
    const intent = req.body.queryResult.intent.displayName
    const userId = userIdExtractor(req)

    switchIntent(req, res, intent, userId)
}

module.exports = {
    main
}