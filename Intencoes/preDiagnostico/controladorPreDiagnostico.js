const respostas = require('./respostasPreDiagnostico');
let dadosPreDiagnostico = {
    grupoDeRisco: false,
    febre: false,
    poucoSintomasLeves: false,
    muitoSintomasLeves: false,
    sintomasGraves: false
}
module.exports = {
    inicioPreDiagnostico() {
        return respostas.inicioPreDiagnostico;
    },
    simPrediagnostico() {
        return respostas.simPrediagnostico;
    },
    naoPrediagnostico() {
        return respostas.naoPrediagnostico;
    },
    simGrupoDeRisco() {
        dadosPreDiagnostico.grupoDeRisco = true;
        console.log(dadosPreDiagnostico);
        return respostas.simGrupoDeRisco;
    },
    naoGrupoDeRisco() {
        console.log(dadosPreDiagnostico);
        return respostas.naoGrupoDeRisco;
    },
    simFebre() {
        dadosPreDiagnostico.febre = true;
        console.log(dadosPreDiagnostico);
        return respostas.febre;
    },
    naoFebre() {
        console.log(dadosPreDiagnostico);
        return respostas.febre;
    },
    simSintomasLeves() {
        console.log(dadosPreDiagnostico);
        return respostas.simSintomasLeves;
    },
    naoSintomasLeves() {
        console.log(dadosPreDiagnostico);
        return respostas.naoSintomasLeves;
    },
    qtdSintomasLeves(req) {
        const parametros =req.body.queryResult.parameters;
        const numeroSintomas = parametros.qtdSintomasLeves;
        numeroSintomas > 3 ? dadosPreDiagnostico.muitoSintomasLeves = true : dadosPreDiagnostico.poucoSintomasLeves = true
        console.log(dadosPreDiagnostico);
        
        return respostas.qtdSintomasLeves;
    },
    simRemedio() {
        console.log(dadosPreDiagnostico);
        return respostas.simRemedio;
    },
    naoRemedio() {
        console.log(dadosPreDiagnostico);
        return respostas.naoSintomasLeves;
    },

    simMelhora() {
        dadosPreDiagnostico.poucoSintomasLeves = false;
        dadosPreDiagnostico.muitoSintomasLeves = false;
        console.log(dadosPreDiagnostico);
        
        return respostas.simMelhora;
    },
    naoMelhora() {
        console.log(dadosPreDiagnostico);
        return respostas.naoSintomasLeves;
    },
    simSintomasGraves() {
        dadosPreDiagnostico.sintomasGraves = true;
        console.log(dadosPreDiagnostico);

        return this.diagnostico();
    },
    naoSintomasGraves() {
        return this.diagnostico();
    },
    fazCodigoDiagnostico() {
        let codigo = '';
        dadosPreDiagnostico.grupoDeRisco ? codigo += `1` : codigo += `0`;

        dadosPreDiagnostico.febre ? codigo += `1` : codigo +=`0`;

        if (dadosPreDiagnostico.poucoSintomasLeves) {
            codigo += `1`;
        } else if (dadosPreDiagnostico.muitoSintomasLeves) {
            codigo += `2`;
        } else {
            codigo += `0`;
            
        }

        dadosPreDiagnostico.sintomasGraves ? codigo += `1` : codigo += `0`;

        return codigo;
    },
    diagnostico() {
        const codigo = this.fazCodigoDiagnostico();

        let arrayCenario = [];
        (dadosPreDiagnostico.grupoDeRisco) ? arrayCenario = respostas.cenarioComGrupoDeRisco: arrayCenario = respostas.cenarioSemGrupoDeRisco
        for (const objeto of arrayCenario) {

            if (codigo === objeto.codigo) {
                return {
                    mensagens:[objeto.mensagem],
                    quickReplies: {
                        title: 'Posso ajudar em mais algo?',
                        buttons: ["Sim, mostrar Menu", "Obrigado, era só isso"]
                    }
                }    
            }
        }
    }

}