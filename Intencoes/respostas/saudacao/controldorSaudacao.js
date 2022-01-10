const resposta = require('./respostaSaudacao');
const axios = require('axios');
module.exports = {
    'saudacao': async (req) => { 

        if (req.body.originalDetectIntentRequest.payload.data === undefined) {
            return resposta.usuarioSemDados;
        } else {
            try {
                const dados = req.body.originalDetectIntentRequest.payload.data;
                const id = dados.from.id;
                const {data} = await axios(`https://projeto-sprint-five-three.herokuapp.com/bd/${id}`);
                if (data === null) {
                    axios({
                        method: "post",
                        url: `https://projeto-sprint-five-three.herokuapp.com/bd/usuario`,
                        data:{
                            primeiroNome: dados.from.first_name,
                            idUsuario: id
                        }
                    });
                    return resposta.usuarioComDados(dados.from.first_name);
                } else {
                    return resposta.usuarioComDadosVolta(req.body.originalDetectIntentRequest.payload.data.from.first_name);
                }
            } catch (erro) {
                console.error(erro);
                return {mensagens: ["Infelizmente encontramos um problema. Por favor tente novamente !"]}
            }
        }
    }
}