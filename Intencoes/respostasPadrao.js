const numeroAleatorio = require('../multiplaRespostas');

module.exports = {
    fallback() {
      let mensagens = [
        `Lamento, mas não compreendi. Poderia repetir com mais calma`,
        `Não entendi! Fique atendo aos detalhes do que você precisa informar e diga novamente!`,
        `Desculpe, mas não compreendi. Por favor, analise com cuidado o que deve informar`,
        `Infelizmente, não captei o que deseja. Informe novamente o que foi pedido.`
      ];
      return mensagens[numeroAleatorio(mensagens.length)];
    },
    welcome() {
      return `Olá! Estou aqui para te ajudar com seu computador.
      \nMe informe seu problema`;
    },
    menu() {
      return `\nMenu:
              \n- Relatar um Problema | Apenas informe seu problema
              \n- Iniciar uma chamada | Digite " CHAMADA "
              \n- Visualizar as Chamadas Ativas | Digite "CHAMADAS ATIVAS"
              \n- Ver suas Chamadas | Digite "MINHAS CHAMADAS"`
    },
    despedida(){
      let mensagens = [
        `Foi um prazer te ajudar!\n Sempre que precisar estarei aqui !`,
        'Espero ter te ajudado!\n Se precisar de algo estou aqui'
      ];
      return mensagens[numeroAleatorio(mensagens.length)];
      
    }
    
  }