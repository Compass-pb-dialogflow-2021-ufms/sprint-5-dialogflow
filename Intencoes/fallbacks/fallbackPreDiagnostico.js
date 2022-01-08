const encerramento = require('../respostasEncerramento');
let umaVez = false;
module.exports = {
    fallbackGrupoDeRisco() {
        umaVez = false;
        return {
            mensagens: [`Não entendi. Para continuarmos, você precisa me indicar se pertence a algum  desses grupos citados:`,
                `- Pessoas com mais de 60 anos; 
                \n- Gestantes;
                \n- Pessoas com doenças crônicas (como: Diabetes, doenças cardiovasculares ou pulmonares);
                \n- Pessoas em tratamento contra o câncer`
            ],
            quickReplies: {
                title: `Você pertence a algum desses grupos citados ?`,
                buttons: ["Pertenço", "Não Pertenço"]
            }
        }
    },
    fallbackGrupoDeRisco2() {
        if (!umaVez) {
            umaVez = true;
            return {
                mensagens: ['Desculpe, ainda não consegui entender. '],
                quickReplies: {
                    title: `Você pertence a algum desses grupos citados ?`,
                    buttons: ["Pertenço", "Não Pertenço"]
                }
            }
        } else {
            return {
                mensagens: [encerramento.encerramentoFallback]
            }
        }
    },
    fallbackFebre() {
        umaVez = false;
        return {
            quickReplies: {
                title: `Não entendi.','Para continuarmos, você precisa me indicar se teve ou não, febre maior que 37,8ºC nos últimos 7 dias.`,
                buttons: ["Tive", "Não Tive"]
            }
        }
    },
    fallbackFebre2() {
        if (!umaVez) {
            umaVez = true;
            return {
                quickReplies: {
                    title: 'Desculpe, ainda não consegui entender. Você teve febre maior que 37,8ºC nos últimos 7 dias ?',
                    quickReplies: ["Tive", "Não Tive"]
                }
            }
        } else {
            return {
                mensagens: [encerramento.encerramentoFallback]
            }
        }
    },
    fallbackSintomasLeves() {
        umaVez = false;
        return {
            quickReplies: {
                title: 'Não entendi. Para continuarmos, você precisa me indicar se apresentou ou não algum desses sintomas citados',
                quickReplies: ["Sim", "Não"]
            }
        }
    },
    fallbackSintomasLeves2() {
        if (!umaVez) {
            umaVez = true;
            return {
                quickReplies: {
                    title: 'Desculpe, ainda não consegui entender. Você precisa me indicar se apresentou algum desses sintomas citados ?',
                    quickReplies: ["Sim", "Não"]
                }
            }
        } else {
            return {
                mensagens: [encerramento.encerramentoFallback]
            }
        }
    },
    fallbackQtdSintomasLeves() {
        umaVez = false;
        return {
            mensagens: ['Não entendi. Para continuarmos, você precisa me falar quantos desses sintomas citados você teve',
                `\n- Coriza ou nariz entupido;
            \n- Cansaço;
            \n- Dor de cabeça;
            \n- Dores no corpo ou abdominais;
            \n- Dor de garganta ;
            \n- Diarréia ou mal estar;
            \n- Tosse;
            \n- E Perda do olfato ou paladar`
            ],
            quickReplies: {
                title: `Quantos sintomas desses você teve ?`,
                buttons: ["1", "2", "3", "Mais de Três"]
            }
        }
    },
    fallbackQtdSintomasLeves2() {
        if (!umaVez) {
            umaVez = true;
            return {
                quickReplies: {
                    title: 'Desculpe, ainda não consegui entender. Quantos desses sintomas citados você teve?',
                    quickReplies: ["1", "2", "3", "Mais de Três"]
                }
            }
        } else {
            return {
                mensagens: [encerramento.encerramentoFallback]
            }
        }
    },
    fallbackRemedio() {
        umaVez = false;
        return {
            quickReplies: {
                title: 'Não entendi. Para continuarmos, você precisa me indicar se usou ou não algum medicamento',
                quickReplies: ["Sim", "Não"]
            }
        }
    },
    fallbackRemedio2() {
        if (!umaVez) {
            umaVez = true;
            return {
                quickReplies: {
                    title: 'Desculpe, ainda não consegui entender. Você usou algum medicamento?',
                    quickReplies: ["Sim", "Não"]
                }
            }
        } else {
            return {
                mensagens: [encerramento.encerramentoFallback]
            }
        }
    },
    fallbackMelhora() {
        umaVez = false;
        return {
            quickReplies: {
                title: 'Não entendi. Para continuarmos, você precisa me indicar se melhorou ou não de todos os sintomas com o medicamento.',
                quickReplies: ["Melhorei", "Não Melhorei"]
            }
        }
    },
    fallbackMelhora2() {
        if (!umaVez) {
            umaVez = true;
            return {
                quickReplies: {
                    title: 'Desculpe, ainda não consegui entender. Você sente que melhorou de todos os sintomas?',
                    quickReplies: ["Melhorei", "Não Melhorei"]
                }
            }
        } else {
            return {
                mensagens: [encerramento.encerramentoFallback]
            }
        }
    },
    fallbackSintomasGraves() {
        umaVez = false;
        return {
            mensagens: [`
            \n- Convulsão ou Vômito;
            \n- Dificuldade para respirar;
            \n- Sensação de desmaio;
            \n- Dedos azulados e pálidos.`],
            quickReplies: {
                title: `Não entendi.Para concluir o pré diagnóstico, você precisa me indicar se sentiu ou não algum sintomas citados?`,
                quickReplies: ["Senti", "Não Senti"]
            }
        }

    },
    fallbackSintomasGraves2() {
        if (!umaVez) {
            umaVez = true;
            return {
                quickReplies: {
                    title: 'Desculpe, ainda não consegui entender. Você sentiu algum dos sintomas citados?',
                    quickReplies: ["Senti", "Não Senti"]
                }
            }
        } else {
            return {
                mensagens: [encerramento.encerramentoFallback]
            }
        }
    },
}