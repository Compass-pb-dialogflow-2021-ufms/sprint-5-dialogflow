const encerramento = require('../respostasEncerramento');
const numerosFallback = require('./numeroFallback');

let umaVez = false;
module.exports = {
    umFallbackPrevencao() {
        return {
            mensagens: ['Desculpe, algumas perguntas ainda não consigo te responder', 'Me diga, qual a sua dúvida relacionada ao Coronavírus?']
        }
    },
    umFallbackContagio() {
        return {
            mensagens: ['Desculpe, algumas perguntas ainda não consigo te responder', 'Me diga, qual a sua dúvida relacionada ao Coronavírus?']
        }
    },
    doisfallback(req) {
        let  numeroFallback  = numerosFallback(req);
        if (numeroFallback < 3) {
            return {
                mensagens: ['Ainda não consegui identificar a sua dúvida.\nVocê pode me perguntar sobre prevenção, contágio ou realizar um pré-diagnóstico, por exemplo.']
            }
        } else {
            return {
                mensagens: [encerramento.encerramentoFallback]
            }
        }
    }

}
//