
const encerramento = require('./respostasEncerramento');

module.exports = {
  fallback() {
    let mensagens = [
      [`Lamento, mas não compreendi. Poderia repetir com mais calma`],
      [`Não entendi! Fique atendo aos detalhes do que você precisa informar e diga novamente!`],
      [`Desculpe, mas não compreendi. Por favor, analise com cuidado o que deve informar`],
      [`Infelizmente, não captei o que deseja. Informe novamente o que foi pedido.`]
    ];
    return {
      mensagens: mensagens[Math.floor(Math.random() * mensagens.length) + 0]
    }
  },
  menu : {
    mensagens : [`Você pode tirar dúvidas comigo sobre prevenção, contágio ou realizar um pré-diagnóstico. `],
    quickReplies: {
      title: `Sobre qual assunto você quer saber?`,
      buttons: ["Contágio", "Prevenção", "Pré-diagnostico"]
  }
  },
  encerramento() {
    return {
      mensagens: [encerramento.encerramento]
    }

  }

}