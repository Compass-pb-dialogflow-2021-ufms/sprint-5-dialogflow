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
        return respostas.simGrupoDeRisco;
    },
    naoGrupoDeRisco() {
        return respostas.naoGrupoDeRisco;
    },
    simFebre() {
        dadosPreDiagnostico.febre = true;
        return respostas.febre;
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
    qtdSintomasLeves(req) {
        const parametros =req.body.queryResult.parameters;
        const numeroSintomas = parametros.qtdSintomasLeves;
        numeroSintomas > 3 ? dadosPreDiagnostico.muitoSintomasLeves = true : dadosPreDiagnostico.poucoSintomasLeves = true
        return respostas.qtdSintomasLeves;
    },
    simRemedio() {
        return respostas.simRemedio;
    },
    naoRemedio() {
        return respostas.naoSintomasLeves;
    },

    simMelhora() {
        dadosPreDiagnostico.poucoSintomasLeves = false;
        dadosPreDiagnostico.muitoSintomasLeves = false;
        return respostas.simMelhora;
    },
    naoMelhora() {
        return respostas.naoSintomasLeves;
    },
    simSintomasGraves() {
        dadosPreDiagnostico.sintomasGraves = true;
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
                    mensagens:[objeto.mensagem +'\nPosso ajudar em mais algo?'],
                    quickReplies: ["Menu", "Obrigado, era só isso"]};
            }
        }
    }

}