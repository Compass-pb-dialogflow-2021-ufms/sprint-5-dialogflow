const { responseBuilder, periodGreeting } = require('../util/index')

const usersController = require('./usersController')

const selectIntent = (intent, userId) => ({
      'Default Welcome Intent': defaultWelcomeIntent(userId)
    , 'Default Fallback Intent': defaultFallbackIntent()
    , 'Farewell Intent': farewellIntent()
    , 'Main Menu Intent': mainMenuIntent(userId)
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

const main = async (req, res) => {
    const intent = req.body.queryResult.intent.displayName
    const userId = req.body.originalDetectIntentRequest.payload.data.source.userId

    const response = await selectIntent(intent, userId)
    res.send(response)
}

module.exports = {
    main
}