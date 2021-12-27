const router = require('express').Router();
const padrao = require('../Intents/respostaPadrao');
const previsao = require('../Intents/respostaPrevisao');

router.post('/', async (req, res) => {
    const tag = req.body.queryResult.intent.displayName;
    const parametros =req.body.queryResult.parameters;
  
    let jsonResponse = {
      fulfillment_messages: [{
        text: {
          text: [],
        }
      }]
    };
    let objetoMensagens = jsonResponse.fulfillment_messages[0];
    if (tag === 'Default Welcome Intent') {
      objetoMensagens.text.text.push(padrao.welcome());
      jsonResponse.fulfillment_messages[0] = objetoMensagens;
    } else if (tag === 'Default Fallback Intent') {
      objetoMensagens.text.text.push(padrao.fallback());
      jsonResponse.fulfillment_messages[0] = objetoMensagens;
    } else if (tag === 'despedida') {
      objetoMensagens.text.text.push(padrao.despedida());
      jsonResponse.fulfillment_messages[0] = objetoMensagens;
    } else if (tag === 'previsaoDoTempo') {
      objetoMensagens.text.text.push(await previsao.previsao(parametros));
      jsonResponse.fulfillment_messages[0] = objetoMensagens;
    } 
    res.send(jsonResponse);
  })


module.exports = router;