const {
      responseBuilder
    , userIdExtractor
    , arrayToStringFormatter
    , messageRandomizer
} = require('../util/index')

const usersController = require('./usersController')
const serviceRequestsController = require('./serviceRequestsController')

const welcomeAgainMessages = [
      'Bem-vindo de volta !\n'
    + 'Lembrando que caso precise de ajuda ou queira relembrar minhas opções de atendimento digite "Ajuda".'
    , 'Olá novamente !\n'
    + 'Lembrando que caso queira, pedindo por "Menu" irei mostrar minhas opções de atendimento.'
    , 'Olá, serei seu atendente novamente !\n'
    + 'Não se esqueça que se precisar de um guia para seu atendimento basta pedir pelo "Menu".'
]

const fallbackMessages = [
      'Desculpe, mas eu não entendi ou possivelmente eu não trato desses assuntos.\n\n'
    + 'Caso precise de ajuda ou queira ver as opções de atendimento digite "Ajuda".'
    , 'Perdão, mas acredito que não trato desses assuntos.\n\n'
    + 'Lembre-se que tenho um menu que pode ajudar no atendimento. Para acessa-lo digite "Menu".'
    , 'Acho que não entendi, cuidado com erros ortográficos e abreviações. Pode ser também que não trato desse tipo de assunto.\n\n'
    + 'Para facilitar seu atendimento sugiro seguir pelo menu. Para visualiza-lo é so digitar "Menu".'
]

const farewellMessages = [
      'Caso precise estarei sempre aqui para te atender.\n\n'
    + 'Até mais e obrigado pela preferência.'
    , 'Sempre que precisar estarei aqui para te atender.\n\n'
    + 'Até logo e obrigado por escolher nossos serviços.'
    , 'Não se esqueça de me chamar sempre que precisar suporte técnico.\n\n'
    + 'Até mais e obrigado por nos escolher.'
]

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
        case 'Software Assistance Intent':
            softwareAssistanceIntent(req, res)
            break
        case 'Service Request Intent':
            serviceRequestIntent(req, res, userId)
            break
        case 'Set User Data Intent':
            setUserDataIntent(req, res, userId)
            break
        case 'List Services Request Intent':
            listServicesRequestIntent(req, res, userId)
            break
    }
}

const defaultWelcomeIntent = async (req, res, userId) => {
    try {
        const texts = []

        const userVerified = await usersController.userExists(userId)
        if (userVerified){
            texts.push(
                messageRandomizer(welcomeAgainMessages, welcomeAgainMessages.length)
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
        messageRandomizer(fallbackMessages, fallbackMessages.length)
    ]

    const response = responseBuilder(texts)
    res.send(response)
}

const helpIntent = (req, res) => {
    const texts = [
          'Por favor escolha uma das opções de acordo com sua necessidade:\n\n'
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
        messageRandomizer(farewellMessages, farewellMessages.length)
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
    const software = req.body.queryResult.parameters.software
    const card = {
          title: 'Atendimento de Software'
        , subtitle: 'Qual opção melhor representa o seu problema ?'
        , buttons: [
            {
                  text: 'Problemas de acesso'
                , postback: `O ${software} está sem acesso.`
            },
            {
                  text: 'Instalação'
                , postback: `O ${software} não está instalado.`
            },
            {
                  text: 'Lentidão'
                , postback: `O ${software} está lento.`
            }
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

const softwareAssistanceIntent = (req, res) => {
    const texts = []

    const software = req.body.queryResult.parameters.software
    const softwareIssue = req.body.queryResult.parameters.softwareIssue

    switch (softwareIssue) {
        case 'Problemas ao acessar':
            texts.push(
                `Para resolver seu problema de acesso ao ${software} precisamos abrir um chamado.`
            )
            break
        case 'Não instalado':
            texts.push(
                `Para instalar o ${software} vamos ter que iniciar um chamado.`
            )
            break
        case 'Lentidão':
            texts.push(
                `Para resolver o seu problema de lentidão no ${software} temos que abrir um chamado.`
            )
            break
    }

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

const serviceRequestIntent = async (req, res, userId) => {
    try {
        const texts = []
        const card = {}

        const User = await usersController.findUser(userId)
        const dataCompleted = await usersController.userDataCompleted(User)
        if (dataCompleted) {
            const description = req.body.queryResult.parameters.description

            await serviceRequestsController.createServiceRequest(userId, description)

            texts.push(
                'Já enviamos o chamado, em breve um técnico irá resolver o seu problema.'
            )

            card.title = 'Posso ajudar em algo mais ?'
            card.buttons = [
                {
                      text: 'Sim'
                    , postback: 'Sim, ir para o menu.'
                },
                {
                      text: 'Não'
                    , postback: 'Não, até mais.'
                }
            ]
        } else {
            texts.push(
                  'Vi aqui que você ainda não tem todos seus dados cadastrados.\n\n'
                + 'Para abrir um chamado precisamos ter alguns dados (Nome completo, telefone, e-mail e CPF).'
            )

            card.title = 'Posso iniciar o formulário ?'
            card.buttons = [
                {
                      text: 'Sim'
                    , postback: 'Sim, iniciar formulário.'
                },
                {
                      text: 'Não'
                    , postback: 'Não, obrigado.'
                }
            ]
        }

        const response = responseBuilder(texts, card)
        res.send(response)
    } catch {

    }
}

const setUserDataIntent = async (req, res, userId) => {
    try {
        const text = [
            'Seus dados foram cadastrados com sucesso.'
        ]

        const card = {
              title: 'Voltar para abertura de chamado ?'
            , buttons: [
                {
                      text: 'Sim'
                    , postback: 'Sim, voltar para abertura de chamado.'
                },
                {
                      text: 'Não'
                    , postback: 'Não, obrigado.'
                }
            ]
        }

        const name = req.body.queryResult.parameters.name
        const phone = req.body.queryResult.parameters.phone
        const email = req.body.queryResult.parameters.email
        const cpf = req.body.queryResult.parameters.cpf

        await usersController.setUserData(userId, name, phone, email, cpf)

        const response = responseBuilder(text, card)
        res.send(response)
    } catch {

    }
}

const listServicesRequestIntent = async (req, res, userId) => {
    try {
        const texts = []
        const card = {
              title: 'Posso ajudar em algo mais ?'
            , buttons: [
                {
                      text: 'Sim'
                    , postback: 'Sim, ir para o menu.'
                },
                {
                      text: 'Não'
                    , postback: 'Não, até mais.'
                }
            ]
        }

        texts.push(
            'Sua lista de chamados:'
        )

        const serviceRequests = await serviceRequestsController.listUserServiceRequests(userId)
        for (let x = 0; x < serviceRequests.length; x++) {
            texts.push(
                  `Chamado nº${x+1}:\n`
                + `Descrição: ${serviceRequests[x].description}`
            )
        }

        const response = responseBuilder(texts, card)
        res.send(response)
    } catch {

    }
}

const main = async (req, res) => {
    const intent = req.body.queryResult.intent.displayName
    const userId = userIdExtractor(req)

    switchIntent(req, res, intent, userId)
}

module.exports = {
    main
}