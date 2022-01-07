const encerramento = require('../respostasEncerramento');
let umaVez = false;
module.exports = {
    umFallbackPrevencao() {
        umaVez = false;
        return {
            mensagens: ['Desculpe, algumas perguntas ainda não consigo te responder', 'Me diga, qual a sua dúvida relacionada ao Coronavírus?']
        }
    },
    umFallbackContagio() {
        umaVez = false;
        return {
            mensagens: ['Desculpe, algumas perguntas ainda não consigo te responder', 'Me diga, qual a sua dúvida relacionada ao Coronavírus?']
        }
    },
    doisfallback() {
        if (!umaVez) {
            umaVez = true;
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