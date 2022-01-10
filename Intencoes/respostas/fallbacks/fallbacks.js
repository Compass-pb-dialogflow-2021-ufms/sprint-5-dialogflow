const encerramento = require('../respostasEncerramento');
const numerosFallback = require('./numeroFallback');

let umaVez = false;
module.exports = {
    'PV-fallbackPrevencao': () => {
        return {
            mensagens: ['Desculpe, algumas perguntas ainda não consigo te responder', 'Me diga, qual a sua dúvida relacionada ao Coronavírus?']
        }
    },
    'CT-fallbackContagio': () => {
        return {
            mensagens: ['Desculpe, algumas perguntas ainda não consigo te responder', 'Me diga, qual a sua dúvida relacionada ao Coronavírus?']
        }
    },
    'PV-fallbackPrevencao2': (req) => {
        let numeroFallback = numerosFallback(req);
        if (numeroFallback < 3) {
            return {
                mensagens: ['Ainda não consegui identificar a sua dúvida.\nVocê pode me perguntar sobre prevenção, contágio ou realizar um pré-diagnóstico, por exemplo.']
            }
        } else {
            return {
                mensagens: [encerramento.encerramentoFallback]
            }
        }
    },
    'CT-fallbackContagio2': (req) => {
        let numeroFallback = numerosFallback(req);
        if (numeroFallback < 3) {
            return {
                mensagens: ['Ainda não consegui identificar a sua dúvida.\nVocê pode me perguntar sobre prevenção, contágio ou realizar um pré-diagnóstico, por exemplo.']
            }
        } else {
            return {
                mensagens: [encerramento.encerramentoFallback]
            }
        }
    },


}
