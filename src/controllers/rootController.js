const {
      responseBuilder
    , userIdExtractor
    , arrayToStringFormatter
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
        case 'Powered Off Device Intent':
            powerOffDeviceIntent(req, res)
            break
        case 'Broken Device Intent':
            brokenDeviceIntent(req, res)
            break
    }
}

const defaultWelcomeIntent = async (req, res, userId) => {
    try {
        const texts = []

        const userVerified = await usersController.userExists(userId)
        if (userVerified){
            texts.push(
                  'Bem-vindo de volta !\n'
                + 'Lembrando que caso precise de ajuda ou queira relembrar minhas opções de atendimento digite "Ajuda"'
            )
            texts.push(
                'Como posso te ajudar dessa vez ?'
            )
        } else {
            texts.push (
                  'Olá ! Seja muito bem-vindo.\n'
                + 'Eu sou seu assistente pessoal e estou aqui para te atender.\n\n'
                + 'Caso precise de ajuda ou queira ver as opções de atendimento digite "Ajuda".'
            )
            texts.push(
                'Como posso te ajudar hoje ?'
            )

            await usersController.createUser(userId)
        }

        const response = responseBuilder(texts)
        res.send(response)
    } catch {

    }
}

const defaultFallbackIntent = (req, res) => {
    const texts = [
          'Desculpe, mas eu não entendi ou possivelmente eu não trato desses assuntos.\n\n'
        + 'Caso precise de ajuda ou queira ver as opções de atendimento digite "Ajuda".'
    ]

    const response = responseBuilder(texts)
    res.send(response)
}

const helpIntent = (req, res) => {
    const texts = [
          'Estou aqui para te dar assistência em quaisquer problema técnico que você esteja passando.'
        , 'Por favor escolha uma das opções de acordo com sua necessidade:\n\n'
        + 'Hardware: Problemas em seu aparelho ou periféricos.\n\n'
        + 'Software: Problemas para utilizar um programa.\n\n'
        + 'Menu do Usuário: Operações com sua conta pessoal.'
    ]

    const card = {
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
    const texts = [
          'Caso precise estarei sempre aqui para te atender.'
        , 'Até mais e obrigado pela preferência.'
    ]

    const response = responseBuilder(texts)
    res.send(response)
}

const hardwareAssistanceMenuIntent = (req, res) => {
    const devices = req.body.queryResult.parameters.devices
    const card = {
          title: 'Atendimento de Hardware'
        , subtitle: 'Qual opção melhor representa o seu problema ?'
        , buttons: [
            {
                  text: 'Aparelho não liga'
                , postback: `${devices != '' ? (devices.length > 1 ? arrayToStringFormatter(devices) + ' não ligam' : devices + ' não liga') : 'Aparelho não liga' }`
            },
            {
                  text: 'Aparelho quebrado'
                , postback: `${devices != '' ? (devices.length > 1 ? arrayToStringFormatter(devices) + ' estão quebrados' : devices + ' está quebrado') : 'Aparelho quebrado' }`
            }
        ]
    }

    const response = responseBuilder([], card)
    res.send(response)
}

const softwareAssistanceMenuIntent = (req, res) => {
    const card = {
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
    const card = {
          title: 'Menu do Usuário'
        , buttons: [
              { text: 'Listar chamados' }
            , { text: 'Atualizar perfil' }
        ]
    }

    const response = responseBuilder([], card)
    res.send(response)
}

const powerOffDeviceIntent = (req, res) => {
    const texts = []

    const devices = req.body.queryResult.parameters.devices
    for (let x = 0; x < devices.length; x++) {
        texts.push(
            paliativeSolution(devices[x])
        )
    }

    const card = {
          title: 'O problema foi resolvido ?'
        , buttons: [
            {
                  text: 'Sim'
                , postback: 'Sim, problema resolvido.'
            },
            {
                  text: 'Não'
                , postback: 'Não, preciso abrir um chamado.'
            }
        ]
    }

    const response = responseBuilder(texts, card)
    res.send(response)
}

const paliativeSolution = (device) => {
    const text = []
    if (device === 'Computador' || device === 'Notebook') {
        text.push(
              `Para seu ${device} primeiro desligue-o por pelo menos 30 segundos e enquanto espera verifique se:\n\n`
            + '1. A fonte de energia (tomada, régua, etc) está realmente passando corrente elétrica.\n'
            + '2. Todos os cabos de alimentação estão bem encaixados.\n\n'
            + 'Tente liga-lo novamente.\n'
        )
    } else if (device === 'Teclado' || device === 'Mouse' || device === 'Webcam') {
        text.push(
              `Para seu ${device} siga os passos:\n\n`
            + '1. Desconecte os cabos do dispositivo.\n'
            + '2. Com um soprador retire qualquer resíduo que possa causar mal contato na porta de entrada.\n'
            + '3. Com uma escova de cerdas finas retire os resíduos remanescentes na porta de entrada. (opcional)\n'
            + '4. Conecte o dispositivo novamente.\n'
        )
    } else if (device === 'Headset' || device === 'Microfone' || device === 'Caixa de Som') {
        text.push(
              `Para seu ${device} siga os passos:\n\n`
            + '1. Desconecte os cabos do dispositivo.\n'
            + '2. Com um soprador retire qualquer resíduo que possa causar mal contato na porta de entrada.\n'
            + '3. Com uma escova de cerdas finas retire os resíduos remanescentes na porta de entrada. (opcional)\n'
            + '4. Conecte o dispositivo novamente.\n'
            + '5. Verifique se o dispositivo está configurado como padrão em seu sistema.\n'
        )
    } else if (device === 'Monitor') {
        text.push(
              `Para seu ${device} verifique se:\n\n`
            + '1. A fonte de energia (tomada, régua, etc) está realmente passando corrente elétrica.\n'
            + '2. Todos os cabos estão bem encaixados.\n\n'
            + 'Tente liga-lo novamente.'
        )
    }

    return text
}

const brokenDeviceIntent = (req, res) => {
    const texts = [
        'Nesse caso temos que abrir um chamado.'
    ]

    const card = {
          title: 'Deseja Confirmar ?'
        , buttons: [
            {
                  text: 'Sim'
                , postbak: 'Sim, abrir um chamado'
            },
            {
                  text: 'Não'
                , postback: 'Não, obrigado'
            }
        ]
    }

    const response = responseBuilder(texts, card)
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