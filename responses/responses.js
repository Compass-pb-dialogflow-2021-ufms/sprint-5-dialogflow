const responses = 
{
    goodbye: ['Se você precisar de mais informações sobre o Coronavírus, pode me chamar.' +
    '\n\nE caso sentir que se enquadra em alguns sintomas, ligue para o Disque Saúde 136!☎',
    (greeting) => {return `Tenha ${greeting}. 👋`}],


    welcome: ['Olá! Sou a doutora Silvia, uma assistente virtual treinada para tirar suas dúvidas relacionas ao CoronaVírus. 👩‍🦰' + 
    '\n\nNeste canal, você poderá tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico, por exemplo.' +
    '\n\nE não se preocupe, pois todos os dados que eu te contar são retirados de fontes seguras que você pode confiar.',

    'Olá novamente! Sou uma assistente virtual treinada para tirar suas dúvidas relacionadas oa Coronavírus. 👩‍🦰',

    'Você pode tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico.',

    'Sobre qual assunto quer saber?',
    
    'Como posso te ajudar?']
}


module.exports = responses