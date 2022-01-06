const { periodGreeting } = require('../util/index')

// Textos para a Default Welcome Intent.
const welcomeText = 'Olá! Sou a Doutora Silvia, uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus.👱‍♀\n\n'
                  + 'Neste canal, você poderá tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico, por exemplo.\n\n'
                  + 'E não se preocupe, pois todos os dados que eu te contar são retirados de fontes seguras que você pode confiar.'

const welcomeAgainText = 'Olá novamente! Sou uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus.👱‍♀'

// Textos para a Farewell Intent
const farewellText = [
      'Se você precisar de mais informações sobre o Coronavírus, pode me chamar.\n\n'
    + 'E caso sentir que se enquadra em alguns dos sintomas, ligue para o Disque Saúde 136!☎'
    , `Tenha ${periodGreeting()}.👋`
]

// Respostas Rápidas para a Main Menu Intent.
const mainMenuQuickReplies = [
      'Prevenção'
    , 'Contágio'
    , 'Casos no Brasil'
    , 'Pré-diagnóstico'
    , 'Outras dúvidas'
]

const mainMenuQuickRepliesTitles = [
      'Você pode tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico.\n\n'
    + 'Sobre qual assunto você quer saber?'
    , 'Você pode tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico.\n\n'
    + 'Como posso te ajudar?'
]

const firstMainMenuQuickRepliesTitles = [
      'Sobre qual assunto você quer saber?'
    , 'Como posso te ajudar?'
]

// Textos e Respostas Rápidas para a Prevention Intent.
const preventionText = [
    'Eu sei ótimas dicas de prevenções básicas e do profissional da saúde.🙂'
]

const preventionQuickReplies = {
      title: 'Qual a sua dúvida?'
    , quickReplies: [
          'Básica'
        , 'Profissional'
    ]
}

// Textos e Respostas Rápidas para a Basic Prevention Intent.
const basicPreventionText = [
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

const basicPreventionQuickReplies = {
      title: 'Voce também pode assistir o video informativo do Ministério da Saúde: https://www.youtube.com/watch?v=cvdskDhw-Ps\n\n'
           + 'Posso ajudar em algo mais?'
    , quickReplies: [
          'Sim'
        , 'Não, era só isso'
    ]
}

// Textos para a Health Professional Prevention Intent.
const healthProfessionalPreventionText = [
      'Os profissionais de saúde devem utilizar as medidas de precaução padrão estabelecidas.👍\n\n'
    + 'Ao prestar serviços que atendem casos suspeitos do vírus, é orientado que os profissionais tenham disponibilidade dos seguintes equipamentos de proteção individual:\n\n'
    + '⚠Para serviços em ambulatório: O uso de máscara cirúrgica e luvas descartáveis.\n\n'
    + '⚠Para o atendimento em IPA, Pronto Socorro, UTI e Unidade semi-intensiva: É importante o uso de máscaras padrão N95 ou similar; luvas descartáveis; gorro; capote cirúrgico e óculos de proteção ou protetor facial.\n\n'
    + '⚠Além disso, para a realizaçãode procedimentos que gerem aerossolização de secreções respiratórias como intubação, aspiração de vias aéreas ou indução de escarro, deve ser utilizado precaução por aerossóis, com uso de máscara N95.😷'
]

// Textos e Respostas Rápidas para a Contagion Intent.
const contagionText = [
    'Eu posso te informar sobre as principais formas de contágio e sobre o período de incubação por coronavírus.🙂'
]

const contagionQuickReplies = {
      title: 'Qual a sua dúvida?'
    , quickReplies: [
          'Formas de contágio'
        , 'Período de incubação'
    ]
}

// Textos para a Contagion Forms Intent.
const contagionFormsText = [
      'A transmissão do vírus acontece por via respiratória, através de gotículas que se espalham pelo ar quando uma pessoa que está infectada tosse ou espirra.💦\n\n'
    + 'Também é possível se contaminar por contato pessoal com as secreções infectadas, como: gotículas de saliva; espirro; tosse; catarro; contato pessoal próximo, como toque ou aperto de mão; e o contato com roupas e objetos contaminados.'
]

// Textos para a Incubation Period Intent.
const incubationPeriodText = [
      'O "período de incubação" significa o tempo entre a contração do vírus e o início dos sintomas da doença.\n\n'
    + 'Esse tempo varia de 1 a 14 dias, mas geralmente pode ocorrer em torno de 5 dias.\n\n'
    + '⚠No entanto, dados preliminares do Coronavírus sugerem que a transmissão possa ocorrer também mesmo sem o aparecimento de sinais e sintomas.'
]

// Respostas Rápidas "Posso ajudar em algo mais?"
const needMoreHelpQuickReplies = {
      title: 'Posso ajudar em algo mais?'
    , quickReplies: [
          'Sim'
        , 'Não, era só isso'
    ]
}

// Getters
const getWelcomeText = () => { return welcomeText }
const getWelcomeAgainText = () => { return welcomeAgainText }
const getFarewellText = () => { return farewellText }
const getMainMenuQuickReplies = () => { return mainMenuQuickReplies }
const getMainMenuQuickRepliesTitles = () => { return mainMenuQuickRepliesTitles }
const getFirstMainMenuQuickRepliesTitles = () => { return firstMainMenuQuickRepliesTitles }
const getPreventionText = () => { return preventionText }
const getPreventionQuickReplies = () => { return preventionQuickReplies }
const getBasicPreventionText = () => { return basicPreventionText }
const getBasicPreventionQuickReplies = () => { return basicPreventionQuickReplies }
const getHealthProfessionalPreventionText = () => { return healthProfessionalPreventionText }
const getContagionText = () => { return contagionText }
const getContagionQuickReplies = () => { return contagionQuickReplies }
const getContagionFormsText = () => { return contagionFormsText }
const getIncubationPeriodText = () => { return incubationPeriodText }
const getNeedMoreHelpQuickReplies = () => { return needMoreHelpQuickReplies }

module.exports = {
      getWelcomeText
    , getWelcomeAgainText
    , getFarewellText
    , getMainMenuQuickReplies
    , getMainMenuQuickRepliesTitles
    , getFirstMainMenuQuickRepliesTitles
    , getPreventionText
    , getPreventionQuickReplies
    , getBasicPreventionText
    , getBasicPreventionQuickReplies
    , getHealthProfessionalPreventionText
    , getContagionText
    , getContagionQuickReplies
    , getContagionFormsText
    , getIncubationPeriodText
    , getNeedMoreHelpQuickReplies
}