const responses = 
{
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


    fallback: {
        default: ['Desculpe, não consegui entender.',

        'Eu ainda não entendi o que você disse.',

        'Vamos tentar novamente...'],

        prevention: ['Desculpe, algumas perguntas ainda não consigo te responder. 😓',

        'Me diga, qual a sua dúvida relacionada ao Coronavírus?']
    },


    goodbye: ['Se você precisar de mais informações sobre o Coronavírus, pode me chamar.' +
    '\n\nE caso sentir que se enquadra em alguns sintomas, ligue para o Disque Saúde 136!☎',
    (greeting) => {return `Tenha ${greeting}. 👋`}],


    healthProfessionalPrevention: ['Os profissionais de saúde devem utilizar as medidas de precaução padrão estabelicidas. 👍' +
    '\n\nAo prestar serviços que atendem casos suspeitos do vírus, é orientado que os profissionais tenham disponibilidade dos seguintes equipamentos de proteção individual:' +
    '\n\n⚠ Para serviços em ambulatório: O uso de máscara cirúrgica e luvas descartáveis.' +
    '\n\n⚠ Para o atendimento em UPA, Pronto Socorro, UTI e Unidade semi-intensiva: É importante o uso de máscaras padrão N95 ou similar; luvas descartáveis; gorro; capote cirúrgico e óculos de protenção ou protetor facial.' +
    '\n\n⚠ Além disso, para a realização de procedimentos que gerem aerossolização de secreções respiratórias como intubação, aspiração de vias aéreas ou indução de escarro, deve ser utilizado precaução por aerossóis, com uso de máscara N95. 😷',

    '\n\nPosso ajudar em algo mais?'],


    prevention: ['Eu sei ótimas dicas de prevenções básica e do profissional da saúde. 🙂',
    'Qual a sua dúvida?'],


    secondTimeInFallback: {
        default: 'Eu ainda não entendi o que você disse. Vamos tentar novamente...',

        prevention: ['Ainda não consegui identificar a sua dúvida.' + 
        '\n\nVocê pode me perguntar sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico, por exemplo. 😊',

        'Me conta, qual a sua dúvida?']
    },


    thirdTimeInFallback: {
        default: ['Desculpe, realmente não consegui entender o que você disse. Vamos parar por aqui.' +
        '\n\nCuide-se, e não se esqueça: caso você se enquadre em alguns dos sintomas, ligue para o Disque sáude 136. ☎',
    
        'Caso você precise de mais informações sobre o Coronavírus, pode me procurar! 👋'],

        prevention: 'Desculpe, não consegui identificar a sua dúvida. Vamos parar por aqui. 😓'
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