const responses = 
{
    aboutMe: 'Esse bot surgiu como uma demanda gerada por um exercício a ser realizado durante a quinta sprint do meu programa de bolsas na Compass UOL. A ideia do exercício é um bot que consiga informar o usuário sobre o vírus SARS-CoV-2.\n\n' + 
    'Quem fez ele -> O desenvolvedor responsável por esse bot foi o Horiel Corrêa Costa. No momento que ele fez, ele era um aluno de segundo semestre de faculdade e sua experiência profissional se resumia a 2 meses de estágio. Esse foi o sexto bot que ele fez, portanto, tenha paciência com com ele :)\n\nPosso te ajudar com mais alguma coisa?',



    
    basicPrevention: ['Vou citar alguns cuidados básicos que reduzem o risco geral de contrair ou transmitir infecções respiratórias agudas, incluindo o coronavírus:' +
    '\n\n🤚 Lave com frequência as mãos até a altura dos punhos , com água e sabão, ou álcool em gel 70%;' +
    '\n\n🤧 Ao tossir ou espirrar, cubra o nariz e boca com lenço ou com o braço. Não use as mãos;' +
    '\n\n👀 Evite tocar os olhos, nariz e boca com as mãos não lavadas;' +
    '\n\n📱 Não compartilhe objetos pessoais;' +
    '\n\n🏠 Mantenha os ambientes bem ventilados;' +
    '\n\n👋 Tenha um comportamento amigável mas sem o contato físico, ou seja, sem apertos de mãos, beijos e abraços;' +
    '\n\n👥 Evite aglomerações se estiver doente;' +
    '\n\n😷 Quando precisar sair de sua residência, sempre utilize máscaras caseiras feitas de tecido.',

    'Você também pode assistir o vídeo informativo do Mistério da Saúde: https://www.youtube.com/watch?v=cvdskDhw-Ps',

    'Posso ajudar em algo mais?'],


    casesInBrazil: 'Essa funcionalidade ainda está em processo de desenvolvimento e portanto não está disponível. Posso ajudar com algo mais, como saber como funciona o contágio ou mesmo sobre as precauções que devem ser tomadas?',


    contagion: ['Eu posso te informar sobre as principais formas de contágio e sobre o período de incubação por Coronavírus. 🙂',
    
    'Qual a sua dúvida?'],


    fallback: {
        default: ['Desculpe, não consegui entender.',

        'Eu ainda não entendi o que você disse.',

        'Vamos tentar novamente...'],

        prevention: ['Desculpe, algumas perguntas ainda não consigo te responder. 😓',

        'Me diga, qual a sua dúvida relacionada ao Coronavírus?'],

        contagion: ['Desculpe, algumas perguntas ainda não consigo te responder. 😓',

        'Me diga, qual a sua dúvida relacionada ao Coronavírus?']
    },


    formsOfContagion: ['A transmissão do vírus acontece por via respiratória, através de gotículas que se espalham pelo ar quando uma pessoa que está infectada tosse ou espirra. 💦' +
    '\n\nTambém é possível se contaminar por contato pessoal com as secreções infectadas, como: gotículas de saliva; espirro; tosse; catarro; contato pessoal próximo, como toque ou aperto de mão; e o contato com roupas e objetos contaminados.',

    'Posso ajudar em algo mais?'],


    goodbye: ['Se você precisar de mais informações sobre o Coronavírus, pode me chamar.' +
    '\n\nE caso sentir que se enquadra em alguns sintomas, ligue para o Disque Saúde 136!☎',
    (greeting) => {return `Tenha ${greeting}. 👋`}],


    healthProfessionalPrevention: ['Os profissionais de saúde devem utilizar as medidas de precaução padrão estabelicidas. 👍' +
    '\n\nAo prestar serviços que atendem casos suspeitos do vírus, é orientado que os profissionais tenham disponibilidade dos seguintes equipamentos de proteção individual:' +
    '\n\n⚠ Para serviços em ambulatório: O uso de máscara cirúrgica e luvas descartáveis.' +
    '\n\n⚠ Para o atendimento em UPA, Pronto Socorro, UTI e Unidade semi-intensiva: É importante o uso de máscaras padrão N95 ou similar; luvas descartáveis; gorro; capote cirúrgico e óculos de protenção ou protetor facial.' +
    '\n\n⚠ Além disso, para a realização de procedimentos que gerem aerossolização de secreções respiratórias como intubação, aspiração de vias aéreas ou indução de escarro, deve ser utilizado precaução por aerossóis, com uso de máscara N95. 😷',

    '\n\nPosso ajudar em algo mais?'],


    incubationPeriod: ['O "período de incubação" significa o tempo da contração do vírus e o início dos sintomas da doença.' +
    '\n\nEsse tempo varia de 1 a 14 dias, mas geralmente pode ocorrer em torno de 5 dias.' +
    '\n\n⚠ No entanto, dados prelimires do Coronavírus sugerem que a transmissão possa ocorrer também mesmo sem o aparecimento de sinais e sintomas.',

    'Posso ajudar em algo mais?'],


    prevention: ['Eu sei ótimas dicas de prevenções básica e do profissional da saúde. 🙂',

    'Qual a sua dúvida?'],


    secondTimeInFallback: {
        default: 'Eu ainda não entendi o que você disse. Vamos tentar novamente...',

        prevention: ['Ainda não consegui identificar a sua dúvida.' + 
        '\n\nVocê pode me perguntar sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico, por exemplo. 😊',

        'Me conta, qual a sua dúvida?'],

        contagion: ['Ainda não consegui identificar a sua dúvida.' + 
        '\n\nVocê pode me perguntar sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico, por exemplo. 😊',

        'Me conta, qual a sua dúvida?']
    },


    thirdTimeInFallback: {
        default: ['Desculpe, realmente não consegui entender o que você disse. Vamos parar por aqui.' +
        '\n\nCuide-se, e não se esqueça: caso você se enquadre em alguns dos sintomas, ligue para o Disque sáude 136. ☎',
    
        'Caso você precise de mais informações sobre o Coronavírus, pode me procurar! 👋'],

        prevention: 'Desculpe, não consegui identificar a sua dúvida. Vamos parar por aqui. 😓',

        contagion: 'Desculpe, não consegui identificar a sua dúvida. Vamos parar por aqui. 😓'
    },


    welcome: ['Olá! Sou a doutora Silvia, uma assistente virtual treinada para tirar suas dúvidas relacionas ao CoronaVírus. 👩‍🦰' + 
    '\n\nNeste canal, você poderá tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico, por exemplo.' +
    '\n\nE não se preocupe, pois todos os dados que eu te contar são retirados de fontes seguras que você pode confiar.',

    'Olá novamente! Sou uma assistente virtual treinada para tirar suas dúvidas relacionadas oa Coronavírus. 👩‍🦰',

    'Você pode tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico.',

    'Sobre qual assunto quer saber?',
    
    'Como posso te ajudar?']
}


module.exports = responses