
module.exports = {
    fallback() {
      return `Não entendi! Fique atendo aos detalhes do que você precisa informar e diga novamente!`;
    },
    welcome() {
      return `Olá! Estou aqui para te ajudar com a previsão de tempo de qualquer cidade do Brasil.
              \nA previsão de qual cidade você deseja ver ?
              \nSiga o exemplo: "São Paulo SP"`;
    },
    despedida(){
      return `Foi um prazer te ajudar!\n Sempre que precisar estarei aqui !`
    }
    
  }