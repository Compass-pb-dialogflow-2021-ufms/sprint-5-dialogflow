
const numeroAleatorio = require('../multiplaRespostas');
module.exports = {
    problemaSoftware(programa){
        if(programa === ''){
            programa = 'está magnitude'
        }
        let mensagens = [
            `Problemas com ${programa} são resolvidos somente através de chamada`,
            `É necessário abrir uma chamada para solucionar dificuldades com ${programa}`
        ];
        return mensagens[numeroAleatorio(mensagens.length)] + `\n Para iniciar uma chamada digite "CHAMADA"`;
    }
}