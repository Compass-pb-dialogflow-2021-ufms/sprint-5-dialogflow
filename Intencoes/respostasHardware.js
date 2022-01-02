const repositorio = require('../repositorio');
module.exports = {
    cacaProblema(parametros) {
        if (parametros.componente === '' && parametros.problema === '') {
            return `Me desculpa, não consegui entender seu problema
            \nCaso queira abrir chamado diretamente digite "CHAMADA"
            \n Ou pode tentar descrever seu problema mais uma vez`
        } else {
            problema = parametros.problema;
            if (problema === 'semInternet' && parametros.componente === '') {
                componente = 'roteador';
            } else {
                componente = parametros.componente;
            }
            if (problema === 'quebrou') {
                return `Inicie uma chamada para resolver a questão\n Para iniciar uma chamada digite "CHAMADA"`;
            }
            if (repositorio[componente] !== undefined) {
                let objetoComponente = repositorio[componente];
                for (const valor in objetoComponente) {
                    if (valor === problema) {
                        return objetoComponente[valor] + `\n\n Se o problema foi solucionado digite "OK"
                                                        \n Caso contrário inicie uma chamada
                                                        \n Para iniciar uma chamada digite "CHAMADA"`;
                    }
                }
            }
        }
        return `Infelizmente esse problema está acima da minha capacidade, você terá que iniciar uma chamada
        \n Para iniciar uma chamada digite "CHAMADA"`;
    }
}