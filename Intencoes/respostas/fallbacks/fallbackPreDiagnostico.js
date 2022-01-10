const encerramento = require('../respostasEncerramento');
const numerosFallback = require('./numeroFallback');
module.exports = {
    'PD-fallbackGrupoDeRisco': () => {
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
    'PD-fallbackGrupoDeRiscoDois': (req) => {
        let  numeroFallback  = numerosFallback(req);
        if (numeroFallback < 3) {
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
    'PD-fallbackFebre': () => {
        return {
            quickReplies: {
                title: `Não entendi. Para continuarmos, você precisa me indicar se teve ou não, febre maior que 37,8ºC nos últimos 7 dias.`,
                buttons: ["Tive", "Não Tive"]
            }
        }
    },
    'PD-fallbackFebre2': (req) => {
        let  numeroFallback  = numerosFallback(req);
        if (numeroFallback < 3) {
            return {
                quickReplies: {
                    title: 'Desculpe, ainda não consegui entender. Você teve febre maior que 37,8ºC nos últimos 7 dias ?',
                    buttons: ["Tive", "Não Tive"]
                }
            }
        } else {
            return {
                mensagens: [encerramento.encerramentoFallback]
            }
        }
    },
    'PD-fallbackSintomasLeves': () => {
        return {
            mensagens : ['Não entendi.'],
            quickReplies: {
                title: 'Para continuarmos, você precisa me indicar se apresentou ou não algum desses sintomas citados',
                buttons: ["Sim", "Não"]
            }
        }
    },
    'PD-fallbackSintomasLeves2': (req) => {
        let  numeroFallback  = numerosFallback(req);
        if (numeroFallback < 3) {
            return {
                quickReplies: {
                    title: 'Desculpe, ainda não consegui entender. Você precisa me indicar se apresentou algum desses sintomas citados ?',
                    buttons : ["Sim", "Não"]
                }
            }
        } else {
            return {
                mensagens: [encerramento.encerramentoFallback]
            }
        }
    },
    'PD-fallbackQtdSintomasLeves': () => {
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
    'PD-fallbackQtdSintomasLeves2': (req) => {
        let  numeroFallback  = numerosFallback(req);
        if (numeroFallback < 3) {
            return {
                quickReplies: {
                    title: 'Desculpe, ainda não consegui entender. Quantos desses sintomas citados você teve?',
                    buttons : ["1", "2", "3", "Mais de Três"]
                }
            }
        } else {
            return {
                mensagens: [encerramento.encerramentoFallback]
            }
        }
    },
    'PD-fallbackRemedio': ()=> {
        return {
            quickReplies: {
                title: 'Não entendi. Para continuarmos, você precisa me indicar se usou ou não algum medicamento',
                buttons : ["Sim", "Não"]
            }
        }
    },
    'PD-fallbackRemedio2': (req) => {
        let  numeroFallback  = numerosFallback(req);
        if (numeroFallback < 3) {
            return {
                quickReplies: {
                    title: 'Desculpe, ainda não consegui entender. Você usou algum medicamento?',
                    buttons : ["Sim", "Não"]
                }
            }
        } else {
            return {
                mensagens: [encerramento.encerramentoFallback]
            }
        }
    },
    'PD-fallbackMelhora': () => {
        return {
            quickReplies: {
                title: 'Não entendi. Para continuarmos, você precisa me indicar se melhorou ou não de todos os sintomas com o medicamento.',
                buttons : ["Melhorei", "Não Melhorei"]
            }
        }
    },
    'PD-fallbackMelhora2': (req) => {
        let  numeroFallback  = numerosFallback(req);
        if (numeroFallback < 3) {
            return {
                quickReplies: {
                    title: 'Desculpe, ainda não consegui entender. Você sente que melhorou de todos os sintomas?',
                    buttons : ["Melhorei", "Não Melhorei"]
                }
            }
        } else {
            return {
                mensagens: [encerramento.encerramentoFallback]
            }
        }
    },
    'PD-fallbackSintomasGraves': ()=> {
        return {
            mensagens: [`
            \n- Convulsão ou Vômito;
            \n- Dificuldade para respirar;
            \n- Sensação de desmaio;
            \n- Dedos azulados e pálidos.`],
            quickReplies: {
                title: `Não entendi.Para concluir o pré diagnóstico, você precisa me indicar se sentiu ou não algum sintomas citados?`,
                buttons : ["Senti", "Não Senti"]
            }
        }

    },
    'PD-fallbackSintomasGraves2':(req) => {
        let  numeroFallback  = numerosFallback(req);
        if (numeroFallback < 3) {
            return {
                quickReplies: {
                    title: 'Desculpe, ainda não consegui entender. Você sentiu algum dos sintomas citados?',
                    buttons : ["Senti", "Não Senti"]
                }
            }
        } else {
            return {
                mensagens: [encerramento.encerramentoFallback]
            }
        }
    },
}