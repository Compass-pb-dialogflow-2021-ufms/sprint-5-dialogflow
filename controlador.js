const intents = require('./objetoIntencoes');
let objetoResposta = {};
let jsonResponse = {};
module.exports = async function BuscaResposta(tag,req) {
    jsonResponse.fulfillment_messages = [];
    for (const valor of intents) {
        if (tag === valor.intent) {
            valor.parametro ? objetoResposta = await valor.funcao(req) : objetoResposta = await valor.funcao()
        }
    }

    adicionaMensagens();
    if (objetoResposta.quickReplies !== undefined) {
        adicionaSugestaoBotao()
    }
    return jsonResponse;

}

function adicionaMensagens() {
    for (const valor of objetoResposta.mensagens) {
        jsonResponse.fulfillment_messages.push({
            text: {
                text: [valor],
            }
        })
    }
}

function adicionaSugestaoBotao() {

    jsonResponse.fulfillment_messages.push({
        quickReplies: {
            quickReplies: objetoResposta.quickReplies
        }
    })

}