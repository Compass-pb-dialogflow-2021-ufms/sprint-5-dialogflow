module.exports = {
    usuarioSemDados: {
        mensagens: [
            `Olá! Sou a Doutora Silvia, uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus. 
            \nNeste canal, você poderá tirar dúvidas comigo sobre prevenção, contágio ou realizar um pré-diagnóstico, por exemplo. 
            \nE não se preocupe, pois todos os dados que eu te contar são retirados de fontes seguras que você pode confiar.`, `Sobre qual assunto você quer saber?`
        ],
        quickReplies: ["Contágio", "Prevenção", "Pré-diagnostico"]
    },

    menu: [`Você pode tirar dúvidas comigo sobre prevenção, contágio ou realizar um pré-diagnóstico. 
    \nSobre qual assunto você quer saber?`],

    usuarioComDadosVolta(nome) {
        return {
            mensagens: [`Olá novamente ${nome}! Sou uma assistente virtual treinada para tirar suas dúvida relacionadas ao Coronavírus.`, this.menu],
            quickReplies: ["Contágio", "Prevenção", "Pré-diagnostico"]
        }

    },
    usuarioComDados(nome) {
        return {
            mensagens: [
                `Olá ${nome}! Sou a Doutora Silvia, uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus. 
        \nNeste canal, você poderá tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico, por exemplo. 
        \nE não se preocupe, pois todos os dados que eu te contar são retirados de fontes seguras que você pode confiar.`, `Sobre qual assunto você quer saber?`
            ],
            quickReplies: ["Contágio", "Prevenção", "Pré-diagnostico"]
        }
    }
}