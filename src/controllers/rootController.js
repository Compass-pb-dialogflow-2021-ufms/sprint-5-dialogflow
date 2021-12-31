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
        case 'Hardware Assistance Menu Intent':
            hardwareAssistanceMenuIntent(req, res)
            break
        case 'Software Assistance Menu Intent':
            softwareAssistanceMenuIntent(req, res)
            break
        case 'User Menu Intent':
            userMenuIntent(req, res)
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

const hardwareAssistanceMenuIntent = (req, res) => {
    let card = {
          title: 'Atendimento de Hardware'
        , subtitle: 'Qual opção melhor representa o seu problema ?'
        , buttons: [
              { text: 'Aparelho não liga' }
            , { text: 'Aparelho quebrado' }
        ]
    }

    const response = responseBuilder([], card)
    res.send(response)
}

const softwareAssistanceMenuIntent = (req, res) => {
    let card = {
          title: 'Atendimento de Software'
        , subtitle: 'Qual opção melhor representa o seu problema ?'
        , buttons: [
              { text: 'Problemas de acesso' }
            , { text: 'Instalação' }
            , { text: 'Lentidão' }
        ]
    }

    const response = responseBuilder([], card)
    res.send(response)
}

const userMenuIntent = (req, res) => {
    let card = {
          title: 'Menu do Usuário'
        , buttons: [
              { text: 'Listar chamados' }
            , { text: 'Atualizar perfil' }
        ]
    }

    const response = responseBuilder([], card)
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