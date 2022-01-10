const { periodGreeting } = require('../util/index')

// Textos para a Default Welcome Intent.
const welcomeText = 'Olá! Sou a Doutora Silvia, uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus.👱‍♀\n\n'
                  + 'Neste canal, você poderá tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico, por exemplo.\n\n'
                  + 'E não se preocupe, pois todos os dados que eu te contar são retirados de fontes seguras que você pode confiar.'

const welcomeAgainText = 'Olá novamente! Sou uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus.👱‍♀'

// Textos e Respostas Rápidas para a Default Fallback Intent.
const fallbackFirstInteractionText = 'Desculpe, não consegui entender'

const fallbackSecondInteractionText = 'Eu ainda não entendi o que você disse. Vamos tentar novamente...'

// Textos para Prevention Intent - fallback e Contagion Intent - fallback.
const preventionNContagionFalbackFirstInteractionText = [
      'Desculpe, algumas perguntas ainda não consigo te responder.😓'
    , 'Me diga, qual a sua dúvida relacionada ao Coronavírus?'
]

const preventionNContagionFalbackSecondInteractionText = [
      'Ainda não consegui identificar a sua dúvida.\n\n'
    + 'Você pode me perguntar sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico, por exemplo.😊'
    , 'Me conta, qual a sua dúvida?'
]

// Textos e Respostas Rápidas para Risk Groups Intent - fallback.
const riskGroupsFallbackFirstInteractionText = 'Não entendi. Para continuarmos, você precisa me indicar se pertence a algum desses grupos citados:'

const riskGroupsFallbackSecondInteractionText = 'Desculpe, ainda não consegui entender.😓'

const riskGroupsFallbackSecondInteractionQuickReplies = {
      title: 'Você pertence a algum dos grupos citados?'
    , quickReplies: [
          'Sim'
        , 'Não'
    ]
}

// Textos e Respostas Rápidas para Fever Intent - fallback.
const feverFallbackFirstInteractionText = 'Não entendi.'

const feverFallbackFirstInteractionQuickReplies = {
      title: 'Para continuarmos, você precisa me indicar se teve ou não, febre maio que 37,8ºC nos últimos 7 dias.🌡'
    , quickReplies: [
          'Tive febre'
        , 'Não tive febre'
    ]
}

const feverFallbackSecondInteractionText = 'Desculpe, ainda não consegui entender.'

// Textos e Respotas Rápidas para Severe Symptoms Intent - fallback.
const mildSymptomsFallbackFirstInteractionText = 'Não entendi. Para continuarmos, você precisa me indicar se apresentou ou não algum desses sintomas citados:'

const mildSymptomsFallbackSecondInteractionText = 'Desculpe, ainda não consegui entender.'

const mildSymptomsFallbaclSecondInteractionQuickReplies = {
      title: 'Quantos dos sintomas citados você apresenta?'
    , quickReplies: [
          'Nenhum'
        , '1'
        , '2'
        , '3'
        , 'Mais de 3 sintomas'
    ]
}

// Textos e Respostas Rápidas para Drugs Taken Intent - fallback.
const drugsTakenFallbackFirstInteractionText = 'Não entendi.😓'

const drugsTakenFallbackFirstInteractionQuickReplies = {
      title: 'Para continuarmos, você precisa me indicar se usou ou não algum medicamento.💊'
    , quickReplies: [
          'Usei medicamentos'
        , 'Não usei'
    ]
}

const drugsTakenFallbackSecondInteractionText = 'Desculpe, ainda não consegui entender.'

const drugsTakenFallbackSecondInteractionQuickReplies = {
      title: 'Você usou algum medicamento? 💊'
    , quickReplies: [
          'Sim'
        , 'Não'
    ]
}

// Textos e Respostas Rápidas para Got Well Intent - fallback.
const gotWellFallbackFirstInteractionText = 'Não entendi. 😓'

const gotWellFallbackFirstInteractionQuickReplies = {
      title: 'Para continuarmos, você precisa me indicar se melhorou ou não com o medicamento.'
    , quickReplies: [
          'Melhorei'
        , 'Não melhorei'
    ]
}

const gotWellFallbackSecondInteractionText = 'Desculpe, ainda não consegui entender.'

const gotWellFallbackSecondInteractionQuickReplies = {
      title: 'Você melhorou com o medicamento?'
    , quickReplies: [
          'Sim'
        , 'Não'
    ]
}

// Textos e Respostas Rápidas para a Severe Symptoms Intent - fallback.
const severeSymptomsFallbackFirstInteractionText = 'Não entendi.😓'

const severeSymptomsFallbackFirstInteractionQuickReplies = {
      title: 'Para concluir o pré diagnóstico, você precisa me indicar se teve ou não algum desses sintomas citados:\n\n'
           + '- Convulsão ou Vômito;\n'
           + '- Dificuldade para respirar;\n'
           + '- Sensação de desmaio;\n'
           + '- Dedos azulados e pálidos.'
    , quickReplies: [
          'Sim'
        , 'Não'
    ]
}

const severeSymptomsFallbackSecondInteractionQuickReplies = {
      title: 'Desculpe, ainda não consegui entender. Você teve algum dos sintomas citados?'
    , quickReplies: [
          'Sim'
        , 'Não'
    ]
}

// Textos para a Farewell Intent
const farewellText = [
      'Se você precisar de mais informações sobre o Coronavírus, pode me chamar.\n\n'
    + 'E caso sentir que se enquadra em alguns dos sintomas, ligue para o Disque Saúde 136!☎'
    , `Tenha ${periodGreeting()}.👋`
]

const fallbackFarewellText = [
      'Desculpe, realmente não consegui entender o que você disse. Vamos parar por aqui.\n\n'
    + 'Cuide se, e não se esqueça: caso você se enquadre em alguns dos sintomas, ligue para o Disque saúde 136.☎'
    , 'Caso você precise de mais informações sobre o Coronavírus, pode me procurar!👋'
]

const preventionNContagionFallbackFarewellText = 'Desculpe, não consegui identificar a sua dúvida. Vamos parar por aqui. 😓'

const preDiagnosticFallbackFarewellText = 'Realmente, não consegui entender. Vamos parar por aqui.'

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

// Textos e Respostas Rápidas para a Pre Diagnostic Intent.
const preDiagnosticText = [
      'Vou te fazer algumas perguntas relacionadas aos sintomas do Coronavírus.\n\n'
    + 'Vale lembrar que esta consulta NÂO é um diagnótico e sim uma orientação para caso você precise de um exame médico.'
]

const preDiagnosticQuickReplies = {
      title: 'Vamos lá?🙂'
    , quickReplies: [
          'Sim'
        , 'Não'
    ]
}

// Textos para a Abort Pre Diagnostic Intent
const abortPreDiagnosticText = [
    'Tudo bem, caso queira fazer um pré-diagnóstico mande uma mensagem.👍'
]

// Textos e Respostas Rápidas para a Risk Groups Intent.
const riskGroupsText = [
    'Você pertence a algum desses grupos citados a seguir?'
]

const riskGroupsQuickReplies = {
      title: '🧓Pessoas com mais de 60 anos;\n'
           + '🤰Gestantes;\n'
           + '🤒Pessoas com doenças crônicas (como: Diabetes, doenças cardiovasculares ou pulmonares);\n'
           + '💊Pessoas em tratamento contra o câncer.'
    , quickReplies: [
          'Pertenço'
        , 'Não pertenço'
    ]
}

// Textos e Respostas Rápidas para a Fever Intent.
const riskGroupsResponseText = [
      'Ok. Pelo o que você me contou, vejo que você se enquadra no grupo de risco.\n\n'
    + 'Vamos continuar.'
    , 'Ok. Pelo o que você me contou, vejo que você não se enquadra no grupo de risco.\n\n'
    + 'Vamos continuar.'
]

const feverQuickReplies = {
      title: 'Você teve febre maior que 37,8ºC nos últimos 7 dias?🌡️'
    , quickReplies: [
          'Sim'
        , 'Não'
    ]
}

// Textos e Respostas Rápidas para a Mild Symptoms Intent.
const mildSymptomsText = [
    'A seguir vou citar alguns sintomas e gostaria que você me informasse se teve algum deles. E se sim, quantos voce sentiu'
]

const mildSymptomsQuickReplies = {
      title: '- Coriza ou nariz entupido;\n'
           + '- Cansaço;\n'
           + '- Dores no corpo ou abdominais;\n'
           + '- Dor de garganta;\n'
           + '- Diarréia ou mal estar;\n'
           + '- Tosse;\n'
           + '- E Perda do olfato ou paladar;'
    , quickReplies: [
          'Nenhum'
        , '1'
        , '2'
        , '3'
        , 'Mais de 3 sintomas'
    ]
}

// Textos e Respostas Rápidas para a Grugs Taken Intent.
const mildSymptomsNumberText = [
      'Entendi, você está com poucos sintomas de gripe.'
    , 'Entendi, você está com vários sintomas de gripe.'
]

const drugsTakenQuickReplies = {
      title: 'E voce usou algum medicamento para tratar os sintomas?💊'
    , quickReplies: [
          'Sim'
        , 'Não'
    ]
}

// Resposatas Rápidas para a Got Well Intent.
const gotWellQuickReplies = {
      title: 'Sente que melhorou?'
    , quickReplies: [
          'Sim'
        , 'Não'
    ]
}

// Textos e Respostas Rápidas para Severe Symptoms Intent.
const noMildSymptomsText = [
      'Que bom! Sem sintomas de gripe. 😊'
    , 'Ótimo! Sem sintomas gripais. 😊'
]

const severeSymptomsText = 'E você sentiu algum desses sintomas citados ?'

const severeSymptomsQuickReplies = {
      title: '- Convulsão ou Vômito;\n'
           + '- Dificuldade para respirar.\n'
           + '- Sensação de desmaio;\n'
           + '- Dedos azulados e pálidos.'
    , quickReplies: [
          'Sim'
        , 'Não'
    ]
}

// Textos para a Result Intent.
const scenarioA1Text = [
      'Que bom! Pelas informações que você me disse, neste momento você não tem suspeita de infecção pelo Coronavírus. 👍\n\n'
    + 'Mas atenção, caso você sinta que se enquadra em alguns dos sintomas ligue para o Disque Saúde 136. ☎'
    , 'Fique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. 🙂'
]

const scenarioA2Text = [
      'Bom, pelo o que você me contou há baixa suspeita de você estar com Coronavírus. Apesar disso, você está sentindo alguns sintomas que precisam de atenção. ⚠\n\n'
    + 'É importante se cuidar! E caso você sinta que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136. ☎'
    , 'Fique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. 🙂'
]

const scenarioA3Text = [
      'Pelo o que você me disse, neste momento você apresenta um quadro gripal com poucos sintomas leves, por isso há baixa suspeita de infecção pelo Coronavírus. 👍\n\n'
    + 'É importante se cuidar! E caso você sinta que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136. ☎'
    , 'Fique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. 🙂'
]

const scenarioA4Text = [
      'Apesar de poucos sinais de infecção pelo Coronavírus, você me contou que está com alguns sintomas que precisam de atenção.\n\n'
    + 'Se você sentir que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136. ☎'
    , 'Fique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. 🙂'
]

const scenarioA5Text = [
      'Bom, pelo o que você me contou, neste momento você apresenta um quadro gripal com sintomas leves, por isso há baixa suspeita de infecção pelo Coronavírus. 👍\n\n'
    + 'Mesmo assim, é importante se cuidar! E caso você sinta que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136. ☎'
    , 'Fique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. 🙂'
]

const scenarioA6Text = [
      'Bom, pelo o que você me disse, neste momento você apresenta um quadro gripal com sintomas leves e é baixa a probabilidade de infecção pelo Coronavírus. Apesar disso, você me contou que está com alguns sintomas que precisam de atenção. ⚠\n\n'
    + 'Se você sentir que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136. ☎'
    , 'Fique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. 🙂'
]

const scenarioA7Text = [
      'Bom, pelas informações que você me contou, neste momento você apresenta um quadro febril e que pode ter uma baixa suspeita de infecção pelo Coronavírus. 👍\n\n'
    + 'Porém é preciso atenção! Se esse quadro vier a incluir mais sintomas e a febre não passar, ligue para o Disque Saúde 136. ☎'
    , 'Cuide-se! E se puder, fique em casa! Sinta-se a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. 🙂'
]

const scenarioA8Text = [
      'Pelas informações que você me contou, você apresenta um quadro febril com outros sintomas que precisam de atenção, pois você apresenta sinais de que pode estar com Coronavírus. ⚠\n\n'
    + 'Minha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 ☎ para mais orientações.'
    , 'Cuide-se! E se puder, fique em casa! Sinta-se a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. 🙂'
]

const scenarioA9Text = [
      'Pelas informações que você me contou, neste momento você apresenta um quadro febril com poucos sintomas de gripe, podendo indicar uma baixa suspeita de infecção pelo Coronavírus. ⚠\n\n'
    + 'Mas atenção, se você sentir que esses sintomas estão persistindo ou se agravando, minha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 ☎ para mais orientações.'
    , 'Cuide-se! E se puder, fique em casa! Sinta-se a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. 🙂'
]

const scenarioA10Text = [
      'Então, pelas informações que você me indicou, você apresenta um quadro febril com outros sintomas que precisam de atenção, pois você apresenta sinais de que pode estar com Coronavírus. ⚠\n\n'
    + 'Minha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 ☎ para mais orientações.'
    , 'Cuide-se! E se puder, fique em casa! Sinta-se a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. 🙂'
]

const scenarioA11Text = [
      'Bom, pelas informações que você me contou, neste momento você apresenta um quadro febril com alguns sintomas de gripe, podendo indicar uma suspeita de infecção pelo Coronavírus. ⚠\n\n'
    + 'FIque atento! Se você sentir que esses sintomas estão persistindo ou se agravando, minha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 ☎ para mais orientações.'
    , 'Cuide-se! E se puder, fique em casa! Sinta-se a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. 🙂'
]

const scenarioA12Text = [
      'Pelas informações que você me contou, você apresenta um quadro febril com outros sintomas que precisam de atenção, pois você apresenta grandes chances de estar com Coronavírus. ⚠\n\n'
    + 'Minha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 ☎ para mais orientações.'
    , 'Cuide-se! E se puder, fique em casa! Sinta-se a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. 🙂'
]

const riskGroupsAdviceText = 'E não esqueça, por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo sua saúde em dia e realizando as medidas de prevenção necessárias. ✋😷\n\n'

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
const getFallbackFirstInteractionText = () => { return fallbackFirstInteractionText }
const getFallbackSecondInteractionText = () => { return fallbackSecondInteractionText }
const getPreventionNContagionFallbackFirstInteractionText = () => { return preventionNContagionFalbackFirstInteractionText }
const getPreventionNContagionFallbackSecondInteractionText = () => { return preventionNContagionFalbackSecondInteractionText }
const getRiskGroupsFallbackFirstInteractionText = () => { return riskGroupsFallbackFirstInteractionText }
const getRiskGroupsFallbackSecondInteractionText = () => { return riskGroupsFallbackSecondInteractionText }
const getRiskGroupsFallbackSecondInteractionQuickReplies = () => { return riskGroupsFallbackSecondInteractionQuickReplies }
const getFeverFallbackFirstInteractionText = () => { return feverFallbackFirstInteractionText }
const getFeverFallbackFirstInteractionQuickReplies = () => { return feverFallbackFirstInteractionQuickReplies }
const getFeverFallbackSecondInteractionText = () => { return feverFallbackSecondInteractionText }
const getMildSymptomsFallbackFirstInteractionText = () => { return mildSymptomsFallbackFirstInteractionText }
const getMildSymptomsFallbackSecondInteractionText = () => { return mildSymptomsFallbackSecondInteractionText }
const getMildSymptomsFallbackSecondInteractionQuickReplies = () => { return mildSymptomsFallbaclSecondInteractionQuickReplies }
const getDrugsTakenFallbackFirstInteractionText = () => { return drugsTakenFallbackFirstInteractionText }
const getDrugsTakenFallbackFirstInteractionQuickReplies = () => { return drugsTakenFallbackFirstInteractionQuickReplies }
const getDrugsTakenFallbackSecondInteractionText = () => { return drugsTakenFallbackSecondInteractionText }
const getDrugsTakenFallbackSecondInteractionQuickReplies = () => { return drugsTakenFallbackSecondInteractionQuickReplies }
const getGotWellFallbackFirstInteractionText = () => { return gotWellFallbackFirstInteractionText }
const getGotWellFallbackFirstInteractionQuickReplies = () => { return gotWellFallbackFirstInteractionQuickReplies }
const getGotWellFallbackSecondInteractionText = () => { return gotWellFallbackSecondInteractionText }
const getGotWellFallbackSecondInteractionQuickReplies = () => { return gotWellFallbackSecondInteractionQuickReplies }
const getSevereSymptomsFallbackFirstInteractionText = () => { return severeSymptomsFallbackFirstInteractionText }
const getSevereSymptomsFallbackFirstInteractionQuickReplies = () => { return severeSymptomsFallbackFirstInteractionQuickReplies }
const getSevereSymptomsFallbackSecondInteractionQuickReplies = () => { return severeSymptomsFallbackSecondInteractionQuickReplies }
const getFarewellText = () => { return farewellText }
const getFallbackFarewellText = () => { return fallbackFarewellText }
const getPreventionNContagionFallbackFarewellText = () => { return preventionNContagionFallbackFarewellText }
const getPreDiagnosticFallbackFarewellText = () => { return preDiagnosticFallbackFarewellText }
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
const getPreDiagnosticText = () => { return preDiagnosticText }
const getPreDiagnosticQuickReplies = () => { return preDiagnosticQuickReplies }
const getAbortPreDiagnosticText = () => { return abortPreDiagnosticText }
const getRiskGroupsText = () => { return riskGroupsText }
const getRiskGroupsQuickReplies = () => { return riskGroupsQuickReplies }
const getRiskGroupsResponseText = () => { return riskGroupsResponseText }
const getFeverQuickReplies = () => { return feverQuickReplies }
const getMildSymptomsText = () => { return mildSymptomsText }
const getMildSymptomsQuickReplies = () => { return mildSymptomsQuickReplies }
const getMildSymptomsNumberText = () => { return mildSymptomsNumberText }
const getDrugsTakenQuickReplies = () => { return drugsTakenQuickReplies }
const getGotWellQuickReplies = () => { return gotWellQuickReplies }
const getNoMildSymptomsText = () => { return noMildSymptomsText }
const getSevereSymptomsText = () => { return severeSymptomsText }
const getSevereSymptomsQuickReplies = () => { return severeSymptomsQuickReplies }
const getScenarioA1Text = () => { return scenarioA1Text }
const getScenarioA2Text = () => { return scenarioA2Text }
const getScenarioA3Text = () => { return scenarioA3Text }
const getScenarioA4Text = () => { return scenarioA4Text }
const getScenarioA5Text = () => { return scenarioA5Text }
const getScenarioA6Text = () => { return scenarioA6Text }
const getScenarioA7Text = () => { return scenarioA7Text }
const getScenarioA8Text = () => { return scenarioA8Text }
const getScenarioA9Text = () => { return scenarioA9Text }
const getScenarioA10Text = () => { return scenarioA10Text }
const getScenarioA11Text = () => { return scenarioA11Text }
const getScenarioA12Text = () => { return scenarioA12Text }
const getRiskGroupsAdviceText = () => { return riskGroupsAdviceText }
const getNeedMoreHelpQuickReplies = () => { return needMoreHelpQuickReplies }

module.exports = {
      getWelcomeText
    , getWelcomeAgainText
    , getFallbackFirstInteractionText
    , getFallbackSecondInteractionText
    , getPreventionNContagionFallbackFirstInteractionText
    , getPreventionNContagionFallbackSecondInteractionText
    , getRiskGroupsFallbackFirstInteractionText
    , getRiskGroupsFallbackSecondInteractionText
    , getRiskGroupsFallbackSecondInteractionQuickReplies
    , getFeverFallbackFirstInteractionText
    , getFeverFallbackFirstInteractionQuickReplies
    , getFeverFallbackSecondInteractionText
    , getMildSymptomsFallbackFirstInteractionText
    , getMildSymptomsFallbackSecondInteractionText
    , getMildSymptomsFallbackSecondInteractionQuickReplies
    , getDrugsTakenFallbackFirstInteractionText
    , getDrugsTakenFallbackFirstInteractionQuickReplies
    , getDrugsTakenFallbackSecondInteractionText
    , getDrugsTakenFallbackSecondInteractionQuickReplies
    , getGotWellFallbackFirstInteractionText
    , getGotWellFallbackFirstInteractionQuickReplies
    , getGotWellFallbackSecondInteractionText
    , getGotWellFallbackSecondInteractionQuickReplies
    , getSevereSymptomsFallbackFirstInteractionText
    , getSevereSymptomsFallbackFirstInteractionQuickReplies
    , getSevereSymptomsFallbackSecondInteractionQuickReplies
    , getFarewellText
    , getFallbackFarewellText
    , getPreventionNContagionFallbackFarewellText
    , getPreDiagnosticFallbackFarewellText
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
    , getPreDiagnosticText
    , getPreDiagnosticQuickReplies
    , getAbortPreDiagnosticText
    , getRiskGroupsText
    , getRiskGroupsQuickReplies
    , getRiskGroupsResponseText
    , getFeverQuickReplies
    , getMildSymptomsText
    , getMildSymptomsQuickReplies
    , getMildSymptomsNumberText
    , getDrugsTakenQuickReplies
    , getGotWellQuickReplies
    , getNoMildSymptomsText
    , getSevereSymptomsText
    , getSevereSymptomsQuickReplies
    , getScenarioA1Text
    , getScenarioA2Text
    , getScenarioA3Text
    , getScenarioA4Text
    , getScenarioA5Text
    , getScenarioA6Text
    , getScenarioA7Text
    , getScenarioA8Text
    , getScenarioA9Text
    , getScenarioA10Text
    , getScenarioA11Text
    , getScenarioA12Text
    , getRiskGroupsAdviceText
    , getNeedMoreHelpQuickReplies
}