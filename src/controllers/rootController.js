const { responseBuilder, periodGreeting } = require('../util/index')

const usersController = require('./usersController')

const selectIntent = (intent, userId) => ({
      'Default Welcome Intent': defaultWelcomeIntent(userId)
    , 'Default Fallback Intent': defaultFallbackIntent()
    , 'Farewell Intent': farewellIntent()
    , 'Main Menu Intent': mainMenuIntent(userId)
    , 'Prevention Intent': preventionIntent()
    , 'Basic Prevention Intent': basicPreventionIntent()
    , 'Health Professional Prevention Intent': healthProfessionalPreventionIntent()
    , 'Contagion Intent': contagionIntent()
    , 'Contagion Forms Intent': contagionFormsIntent()
    , 'Incubation Period Intent': incubationPeriodIntent()
}[intent] || null)

const defaultWelcomeIntent = async (userId) => {
    const texts = []
        , quickReplies = (await mainMenuIntent(userId)).fulfillmentMessages[0].quickReplies

    const userVerified = await usersController.userExists(userId)
    if (userVerified) {
        texts.push(
            'Olá novamente! Sou uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus.👱‍♀'
        )
    } else {
        texts.push(
              'Olá! Sou a Doutora Silvia, uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus.👱‍♀\n\n'
            + 'Neste canal, você poderá tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico, por exemplo.\n\n'
            + 'E não se preocupe, pois todos os dados que eu te contar são retirados de fontes seguras que você pode confiar.'
        )

        await usersController.createUser(userId)
    }

    return responseBuilder(texts, quickReplies)
}

const defaultFallbackIntent = () => {}

const farewellIntent = () => {
    const texts = [
          'Se você precisar de mais informações sobre o Coronavírus, pode me chamar.\n\n'
        + 'E caso sentir que se enquadra em alguns dos sintomas, ligue para o Disque Saúde 136!☎'
        , `Tenha ${periodGreeting()}.👋`
    ]

    return responseBuilder(texts)
}

const mainMenuIntent = async (userId) => {
    const quickReplies = {}

    const userVerified = await usersController.userExists(userId)
    if (userVerified) {
        quickReplies.title = 'Você pode tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico.\n\n'
                           + 'Sobre qual assunto você quer saber ?'
    } else {
        quickReplies.title = 'Sobre qual assunto você quer saber?'
    }

    quickReplies.quickReplies = [
          'Prevenção'
        , 'Contágio'
        , 'Casos no Brasil'
        , 'Pré-diagnóstico'
        , 'Outras dúvidas'
    ]

    return responseBuilder([], quickReplies)
}

const preventionIntent = () => {
    const texts = [
        'Eu sei ótimas dicas de prevenções básicas e do profissional da saúde.🙂'
    ]

    const quickReplies = {
          title: 'Qual a sua dúvida?'
        , quickReplies: [
              'Básica'
            , 'Profissional'
        ]
    }

    return responseBuilder(texts, quickReplies)
}

const basicPreventionIntent = () => {
    const texts = [
          'Vou citar alguns cuidados básicos que reduzem o risco geral de contrair ou transmitir infecções respiratórias agudas, incluindo o coronavírus:\n\n'
        + '✋ Lave com frequência as mãos até a altura dos punhos, com água e sabão, ou use álcool em gel 70%;\n\n'
        + '🤧 Ao tossir ou espirrar, cubra o nariz e a boca com lenço ou com o braço. Não use as mãos;\n\n'
        + '👀 Evite tocar nos olhjos, nariz e boca com as mãos não lavadas;\n\n'
        + '📱 Não compartilhe objetos pessoais;\n\n'
        + '🏠 Mantenha os ambientes bem ventilados;\n\n'
        + '👋 Tenha um comportamento amigável mas sem o contato físico, ou seja, sem apertos de mão, beijos e abraços;\n\n'
        + '🧑🏼‍🤝‍🧑🏼 Evite aglomerações se estiver doente;\n\n'
        + '😷 Quando precisar sair de sua residência, sempre utilize máscaras caseiras feitas de tecido.'
    ]

    const quickReplies = {
          title: 'Voce também pode assistir o video informativo do Ministério da Saúde: https://www.youtube.com/watch?v=cvdskDhw-Ps\n\n'
               + 'Posso ajudar em algo mais?'
        , quickReplies: [
              'Sim'
            , 'Não, era só isso'
        ]
    }

    return responseBuilder(texts, quickReplies)
}

const healthProfessionalPreventionIntent = () => {
    const texts = [
          'Os profissionais de saúde devem utilizar as medidas de precaução padrão estabelecidas.👍\n\n'
        + 'Ao prestar serviços que atendem casos suspeitos do vírus, é orientado que os profissionais tenham disponibilidade dos seguintes equipamentos de proteção individual:\n\n'
        + '⚠Para serviços em ambulatório: O uso de máscara cirúrgica e luvas descartáveis.\n\n'
        + '⚠Para o atendimento em IPA, Pronto Socorro, UTI e Unidade semi-intensiva: É importante o uso de máscaras padrão N95 ou similar; luvas descartáveis; gorro; capote cirúrgico e óculos de proteção ou protetor facial.\n\n'
        + '⚠Além disso, para a realizaçãode procedimentos que gerem aerossolização de secreções respiratórias como intubação, aspiração de vias aéreas ou indução de escarro, deve ser utilizado precaução por aerossóis, com uso de máscara N95.😷'
    ]

    const quickReplies = {
          title: 'Posso ajudar em algo mais?'
        , quickReplies: [
              'Sim'
            , 'Não, era só isso'
        ]
    }

    return responseBuilder(texts, quickReplies)
}

const contagionIntent = () => {
    const texts = [
        'Eu posso te informar sobre as principais formas de contágio e sobre o período de incubação por coronavírus.🙂'
    ]

    const quickReplies = {
          title: 'Qual a sua dúvida?'
        , quickReplies: [
              'Formas de contágio'
            , 'Período de incubação'
        ]
    }

    return responseBuilder(texts, quickReplies)
}

const contagionFormsIntent = () => {
    const texts = [
          'A transmissão do vírus acontece por via respiratória, através de gotículas que se espalham pelo ar quando uma pessoa que está infectada tosse ou espirra.💦\n\n'
        + 'Também é possível se contaminar por contato pessoal com as secreções infectadas, como: gotículas de saliva; espirro; tosse; catarro; contato pessoal próximo, como toque ou aperto de mão; e o contato com roupas e objetos contaminados.'
    ]

    const quickReplies = {
          title: 'Posso ajudar em algo mais?'
        , quickReplies: [
              'Sim'
            , 'Não, era só isso'
        ]
    }

    return responseBuilder(texts, quickReplies)
}

const incubationPeriodIntent = () => {
    const texts = [
          'O "período de incubação" significa o tempo entre a contração do vírus e o início dos sintomas da doença.\n\n'
        + 'Esse tempo varia de 1 a 14 dias, mas geralmente pode ocorrer em torno de 5 dias.\n\n'
        + '⚠No entanto, dados preliminares do Coronavírus sugerem que a transmissão possa ocorrer também mesmo sem o aparecimento de sinais e sintomas.'
    ]

    const quickReplies = {
          title: 'Posso ajudar em algo mais?'
        , quickReplies: [
              'Sim'
            , 'Não, era só isso'
        ]
    }

    return responseBuilder(texts, quickReplies)
}

const main = async (req, res) => {
    const intent = req.body.queryResult.intent.displayName
    const userId = req.body.originalDetectIntentRequest.payload.data.source.userId

    const response = await selectIntent(intent, userId)
    res.send(response)
}

module.exports = {
    main
}