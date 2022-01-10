const respostas = require('./respostasPreDiagnostico');
const axios = require('axios');

module.exports = {
    inicioPreDiagnostico() {
        return respostas.inicioPreDiagnostico;
    },
    async simPrediagnostico(req) {
        const session = req.body.session.slice(38);
        const dados = {
            session: session,
            grupoDeRisco: false,
            febre: false,
            poucoSintomasLeves: false,
            muitoSintomasLeves: false,
            sintomasGraves: false
        }
        try {
            console.log("session")
            console.log(session)
            const {
                data
            } = await axios({
                method: "PUT",
                url: `https://de53-45-237-255-227.ngrok.io/bd/diagnostico/${session}`,
                data: dados
            });
            console.log('data')
            console.log(data)
            if (data === null) {
                axios({
                    method: "post",
                    url: `https://de53-45-237-255-227.ngrok.io/bd/diagnostico`,
                    data: dados
                });

            }
            return respostas.simPrediagnostico;
        } catch (erro) {
            console.error(erro);
            return {
                mensagens: ["Infelizmente encontramos um problema. Por favor tente novamente !"]
            }
        }
    },
    naoPrediagnostico() {
        return respostas.naoPrediagnostico;
    },
    simGrupoDeRisco(req) {
        if(this.atualizarDados(req, {grupoDeRisco : true})){
            return respostas.simGrupoDeRisco;
        } else{
            return {
                mensagens: ["Infelizmente encontramos um problema. Por favor tente novamente !"]
            }
        }
    },
    naoGrupoDeRisco() {
        return respostas.naoGrupoDeRisco;
    },
    async simFebre(req) {
        if(this.atualizarDados(req, {febre : true})){
            return respostas.febre;
        } else{
            return {
                mensagens: ["Infelizmente encontramos um problema. Por favor tente novamente !"]
            }
        }

    },
    naoFebre() {
        return respostas.febre;
    },
    simSintomasLeves() {
        return respostas.simSintomasLeves;
    },
    naoSintomasLeves() {
        return respostas.naoSintomasLeves;
    },
    async qtdSintomasLeves(req) {
        const parametros = req.body.queryResult.parameters;
        const numeroSintomas = parametros.qtdSintomasLeves;
        let dados = {};
        if(numeroSintomas > 3){
            dados = {muitoSintomasLeves : true}
        }else{
             dados = {poucoSintomasLeves : true}
        }
        if(this.atualizarDados(req, dados)){
            return respostas.qtdSintomasLeves;
        } else{
            return {
                mensagens: ["Infelizmente encontramos um problema. Por favor tente novamente !"]
            }
        } 
    },
    simRemedio() {
        return respostas.simRemedio;
    },
    naoRemedio() {
        return respostas.naoSintomasLeves;
    },

    async simMelhora(req) {
        if(this.atualizarDados(req, {poucoSintomasLeves: false,muitoSintomasLeves: false})){
            return respostas.simMelhora;
        } else{
            return {
                mensagens: ["Infelizmente encontramos um problema. Por favor tente novamente !"]
            }
        }
       
    },
    naoMelhora() {
        return respostas.naoSintomasLeves;
    },
    async simSintomasGraves(req) {
        if(this.atualizarDados(req, {sintomasGraves: true})){
            return await this.diagnostico(req);
        } else{
            return {
                mensagens: ["Infelizmente encontramos um problema. Por favor tente novamente !"]
            }
        }
    },
    async naoSintomasGraves(req) {
        return await this.diagnostico(req);
    },
    async fazCodigoDiagnostico(req) {
        let codigo = '';
        try {
            const session = req.body.session.slice(38);
            const {data} = await axios(`https://de53-45-237-255-227.ngrok.io/bd/diagnostico/dados/${session}`)
            data.grupoDeRisco ? codigo += `1` : codigo += `0`;

            data.febre ? codigo += `1` : codigo += `0`;

            if (data.poucoSintomasLeves) {
                codigo += `1`;
            } else if (data.muitoSintomasLeves) {
                codigo += `2`;
            } else {
                codigo += `0`;

            }

            data.sintomasGraves ? codigo += `1` : codigo += `0`;
            return codigo;
        } catch (erro) {
            console.error(erro);
            return erro;
        }


    },
    async diagnostico(req) {
        const codigo = await this.fazCodigoDiagnostico(req);
        console.log("codigo")
        console.log(codigo)
        let arrayCenario = [];
        let cenario = codigo.slice(0,-3);
        (cenario === '1') ? arrayCenario = respostas.cenarioComGrupoDeRisco: arrayCenario = respostas.cenarioSemGrupoDeRisco
        for (const objeto of arrayCenario) {
            if (codigo === objeto.codigo) {
                return {
                    mensagens: objeto.mensagem,
                    quickReplies: {
                        title: 'Posso ajudar em mais algo?',
                        buttons: ["Sim, mostrar Menu", "Obrigado, era só isso"]
                    }
                }
            }
        }
    },
    async atualizarDados(req,dados){
        try {
            console.log(dados);
            const session = req.body.session.slice(38);
            await axios({
                method: "put",
                url: `https://de53-45-237-255-227.ngrok.io/bd/atualizar/${session}`,
                data: dados
            })
            return true;
        } catch (erro) {
            console.error(erro);
            return false;
        }
    }

}