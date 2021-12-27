const axios = require('axios');

module.exports = {
    async previsao(parametros) {
        if (parametros.cidade === '' || parametros.estado === '') {
            return 'Por favor, informe a cidade e seu estado como no exemplo\nEXEMPLO: "Belo Horizonte MG"';
        }
        const cidade = parametros.cidade;
        const estado = parametros.estado;
        try {
            const dados = await axios(`https://projeto-one-sprint-five.glitch.me/api/externa/previsao/?estado=${estado}&cidade=${cidade}`);
            if (typeof dados.data !== 'object') {
                return dados.data + `\n Verifique a informação inserida\nLembrando que só forneço previsões de cidades brasileiras
                \nSiga o exemplo : Bonito MS`;
            } else {
                return this.mensagemComPrevisao(dados.data, cidade);
            }

        } catch (erro) {
            console.error(erro);
            return "Infelizmente encontramos um problema. Por favor tente novamente !"
        }
    },
    mensagemComPrevisao(dados, cidade) {
        let fonte = "";
        const data = new Date();
        let mensagem = `${cidade}`;
        let dataAtual = "";
        for (let index = 0; index < 4; index++) {
            dataAtual = `${data.getDate()+index}/${data.getMonth()+1}/${data.getFullYear()}`;
            let dadosDia = dados[dataAtual];
            if (index <= 1) {
                mensagem += `\n\n${dataAtual} - ${dadosDia.manha.dia_semana}: 
                \nManha : ${dadosDia.manha.resumo}\nTemperatura :\nMIN: ${dadosDia.manha.temp_min}°C\nMAX: ${dadosDia.manha.temp_max}°C
                \nTarde : ${dadosDia.tarde.resumo}\nTemperatura :\nMIN: ${dadosDia.tarde.temp_min}°C\nMAX: ${dadosDia.tarde.temp_max}°C
                \nNoite : ${dadosDia.noite.resumo}\nTemperatura :\nMIN: ${dadosDia.noite.temp_min}°C\nMAX: ${dadosDia.noite.temp_max}°C`
            } else {
                mensagem += ` \n\n${dataAtual} - ${dadosDia.dia_semana}: ${dadosDia.resumo}\nTemperatura :\nMIN: ${dadosDia.temp_min}°C\nMAX: ${dadosDia.temp_max}°C`
                fonte =dadosDia.fonte;
            }
        }
        return mensagem + `\n\nFonte : ${fonte}\n\n Caso deseje olhar a previsão de uma outra cidade basta informar`;
    },

}