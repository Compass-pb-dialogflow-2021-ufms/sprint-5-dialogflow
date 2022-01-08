const intents = require('./objetoIntencoes');
module.exports = async function BuscaResposta(tag,req) {
    let objetoResposta = {};
    let jsonResponse = {};
    jsonResponse.fulfillment_messages = [];
    for (const valor of intents) {
        if (tag === valor.intent) {
            valor.parametro ? objetoResposta = await valor.funcao(req) : objetoResposta = await valor.funcao()
        }
    }
    
    if (objetoResposta.mensagens !== undefined) {
        jsonResponse = adicionaMensagens(objetoResposta,jsonResponse);
    }
    if (objetoResposta.quickReplies !== undefined) {
       jsonResponse = adicionaSugestaoBotao(objetoResposta,jsonResponse)
    }
    return jsonResponse;

}

function adicionaMensagens(objetoResposta,jsonResponse) {
    for (const valor of objetoResposta.mensagens) {
        jsonResponse.fulfillment_messages.push({
            text: {
                text: [valor],
            }
        })
    }
    return jsonResponse;
}

function adicionaSugestaoBotao(objetoResposta,jsonResponse) {

    jsonResponse.fulfillment_messages.push({
        quickReplies: {
            title :objetoResposta.quickReplies.title ,
            quickReplies: objetoResposta.quickReplies.buttons
        }
    })
    return jsonResponse;

}