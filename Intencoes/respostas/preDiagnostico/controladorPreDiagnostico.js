const respostas = require('./respostasPreDiagnostico');
const axios = require('axios');

module.exports = {
    'PD-PreDiagnostico' : () => {
        return respostas.inicioPreDiagnostico;
    },
    'PD-simPreDiagnostico' : async (req) => {
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
            const {
                data
            } = await axios({
                method: "PUT",
                url: `https://809b-45-237-255-227.ngrok.io/bd/diagnostico/${session}`,
                data: dados
            });
            if (data === null) {
                axios({
                    method: "post",
                    url: `https://809b-45-237-255-227.ngrok.io/bd/diagnostico`,
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
    'PD-naoPreDiagnostico': () => {
        return respostas.naoPrediagnostico;
    },
    'PD-simGrupoDeRisco' : (req) => {
        if(atualizarDados(req, {grupoDeRisco : true})){
            return respostas.simGrupoDeRisco;
        } else{
            return {
                mensagens: ["Infelizmente encontramos um problema. Por favor tente novamente !"]
            }
        }
    },
    'PD-naoGrupoDeRisco' : () => {
        return respostas.naoGrupoDeRisco;
    },
    'PD-simFebre' : async (req) => {
        if(atualizarDados(req, {febre : true})){
            return respostas.febre;
        } else{
            return {
                mensagens: ["Infelizmente encontramos um problema. Por favor tente novamente !"]
            }
        }

    },
    'PD-naoFebre' : () => {
        return respostas.febre;
    },
    'PD-simSintomasLeves' : () => {
        return respostas.simSintomasLeves;
    },
    'PD-naoSintomasLeves' : () => {
        return respostas.naoSintomasLeves;
    },
    'PD-qtdSintomasLeves' : async (req) => {
        const parametros = req.body.queryResult.parameters;
        const numeroSintomas = parametros.qtdSintomasLeves;
        let dados = {};
        if(numeroSintomas > 3){
            dados = {muitoSintomasLeves : true}
        }else{
             dados = {poucoSintomasLeves : true}
        }
        if(atualizarDados(req, dados)){
            return respostas.qtdSintomasLeves;
        } else{
            return {
                mensagens: ["Infelizmente encontramos um problema. Por favor tente novamente !"]
            }
        } 
    },
    'PD-simRemedio' : () => {
        return respostas.simRemedio;
    },
    'PD-naoRemedio' : () => {
        return respostas.naoSintomasLeves;
    },

    'PD-simMelhora': async (req) => {
        if(atualizarDados(req, {poucoSintomasLeves: false,muitoSintomasLeves: false})){
            return respostas.simMelhora;
        } else{
            return {
                mensagens: ["Infelizmente encontramos um problema. Por favor tente novamente !"]
            }
        }
       
    },
    'PD-naoMelhora': ()=> {
        return respostas.naoSintomasLeves;
    },
    'PD-simSintomasGraves' : async (req)=> {
        if(atualizarDados(req, {sintomasGraves: true})){
            return await diagnostico(req);
        } else{
            return {
                mensagens: ["Infelizmente encontramos um problema. Por favor tente novamente !"]
            }
        }
    },
    'PD-naoSintomasGraves': async (req) => {
        return await diagnostico(req);
    },
    

}
async function fazCodigoDiagnostico(req) {
    let codigo = '';
    try {
        const session = req.body.session.slice(38);
        const {data} = await axios(`https://809b-45-237-255-227.ngrok.io/bd/diagnostico/dados/${session}`)
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


}
async function diagnostico(req) {
    const codigo = await fazCodigoDiagnostico(req);
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
}
async function atualizarDados(req,dados){
    try {
        const session = req.body.session.slice(38);
        await axios({
            method: "put",
            url: `https://809b-45-237-255-227.ngrok.io/bd/atualizar/${session}`,
            data: dados
        })
        return true;
    } catch (erro) {
        console.error(erro);
        return false;
    }
}