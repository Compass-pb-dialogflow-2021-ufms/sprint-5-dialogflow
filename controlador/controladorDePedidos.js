const Usuario = require('../modelo/usuario')

const welcome = require('../intents/welcome')
const encerramento = require('../intents/encerramento')
const prevencao = require('../intents/prevencao')
const contagio = require('../intents/contagio')
const formasContagio = require('../intents/formascontagio')
const periodoIncubacao = require('../intents/incubacaoperiodo')
const prevencaobasica = require('../intents/prevencaobasica')
const menuprincipal = require('../intents/menuprincipal')
const ajuda = require('../intents/ajuda')
const prevencaoprofissional = require('../intents/prevencaoprofissional')
//Pré diagnostico - grupo de risco
const prediagnosticogruporisco1 = require('../intents/prediagnosticogruporisco/prediagnosticogruporisco1')
const prediagnosticogruporisco2 = require('../intents/prediagnosticogruporisco/prediagnosticogruporisco2')
const prediagnosticogruporisco3 = require('../intents/prediagnosticogruporisco/prediagnosticogruporisco3')
const prediagnosticogruporisco4 = require('../intents/prediagnosticogruporisco/prediagnosticogruporisco4')
const prediagnosticogruporisconegacao = require('../intents/prediagnosticogruporisco/prediagnosticogrupoderisconegacao')
//Pré diagnostico - sintomas leves
const prediagnosticosintomasleves1 = require('../intents/prediagnosticosintomasleves/prediagnosticosintomasleves1')
const prediagnosticosintomasleves2 = require('../intents/prediagnosticosintomasleves/prediagnosticosintomasleves2')
const prediagnosticosintomasleves3 = require('../intents/prediagnosticosintomasleves/prediagnosticosintomasleves3')
const prediagnosticosintomasleves4 = require('../intents/prediagnosticosintomasleves/prediagnosticosintomasleves4')
//Pré diagnostico - sintomas graves
const prediagnosticosintomasgraves1 = require('../intents/prediagnosticosintomasgraves/prediagnosticosintomasgraves1')

const fulfillmentMessages = require('../dialogflowMessages/fullfimentMessages')

const botDePedidos = async (req, res) => {
  let intentName = req.body.queryResult.intent.displayName;
  let resposta = false;
  let source = req.body.originalDetectIntentRequest.source;
  if(source == 'telegram'){
    const idTelegramHere = req.body.originalDetectIntentRequest.payload.data.from.id
    const nome = req.body.originalDetectIntentRequest.payload.data.from.first_name
    const usuario = new Usuario({idTelegram: idTelegramHere})
    const novoUsuario = await usuario.save()
    if(novoUsuario.idTelegram == idTelegramHere){
        resposta = true
        var novoNome = nome;
    }    
  }

  switch(intentName){
    case "Default Welcome Intent":
      res.json(fulfillmentMessages(welcome(resposta)[0], welcome(resposta)[1]))
      break;
    case "Encerramento":
      res.json(fulfillmentMessages(encerramento()[0], encerramento()[1]))
      break;
    //Fluxo prevenção
    case "Prevenção":
      res.json(fulfillmentMessages(prevencao()[0], prevencao()[1]))
      break;
    case "Prevenção - Prevenção básica":
      res.json(fulfillmentMessages(prevencaobasica()[0], prevencaobasica()[1]))
      break;
    case "Prevenção - Prevenção do profissional":
      res.json(fulfillmentMessages(prevencaoprofissional()[0], prevencaoprofissional()[1]))
      break;
    case "Prevenção - Prevenção do profissional - yes":
      res.json({ "fulfillmentText": menuprincipal()});
      break;
    case "Prevenção - Prevenção básica - yes":
      res.json({ "fulfillmentText": menuprincipal()});
      break;
    //Fluxo contágio
    case "Contágio":
      res.json(fulfillmentMessages(contagio()[0], contagio()[1]))
      break;
    case "Contágio - Formas de contágio":
      res.json(fulfillmentMessages(formasContagio()[0], formasContagio()[1]))
      break;
    case "Contágio - Período de incubação":
      res.json(fulfillmentMessages(periodoIncubacao()[0], periodoIncubacao()[1]))
      break;
    case "Contágio - Período de incubação - yes":
      res.json({ "fulfillmentText": menuprincipal()});
      break;
    case "Contágio - Formas de contágio - yes":
      res.json({ "fulfillmentText": menuprincipal()});
      break;
    //Fluxo Pré-diagnóstico - grupo de risco
    case "Pré-diagnóstico - grupo de risco":
      res.json(fulfillmentMessages(prediagnosticogruporisco1()[0], prediagnosticogruporisco1()[1]))
      break;
    case "Pré-diagnóstico - grupo de risco - yes":
      res.json(fulfillmentMessages(prediagnosticogruporisco2()[0], prediagnosticogruporisco2()[1]))
      break;
    case "Pré-diagnóstico - grupo de risco - yes - pertenço":
      res.json(fulfillmentMessages(prediagnosticogruporisco3()[0], prediagnosticogruporisco3()[1]))
      break;
    case "Pré-diagnóstico - grupo de risco - yes - não pertenço":
      res.json(fulfillmentMessages(prediagnosticogruporisco4()[0], prediagnosticogruporisco4()[1]))
      break;
    case "Pré-diagnóstico - grupo de risco - yes - não pertenço - yes":
      res.json(fulfillmentMessages(prediagnosticosintomasleves1()[0], prediagnosticosintomasleves1()[1]))
      break;
    case "Pré-diagnóstico - grupo de risco - yes - pertenço - yes":
      res.json(fulfillmentMessages(prediagnosticosintomasleves1()[0], prediagnosticosintomasleves1()[1]))
      break;
    case "Pré-diagnóstico - grupo de risco - yes - não pertenço - no":
      res.json(fulfillmentMessages(prediagnosticosintomasleves1()[0], prediagnosticosintomasleves1()[1]))
      break;
    case "Pré-diagnóstico - grupo de risco - yes - pertenço - no":
      res.json(fulfillmentMessages(prediagnosticosintomasleves1()[0], prediagnosticosintomasleves1()[1]))
      break;
    case "Pré-diagnóstico - grupo de risco - no":
      res.json(fulfillmentMessages(prediagnosticogruporisconegacao()[0], prediagnosticogruporisconegacao()[1]))
      break;
    case "Pré-diagnóstico - grupo de risco - no - yes":
      res.json({ "fulfillmentText": menuprincipal()});
      break;
    //Fluxo Pré-diagnóstico - sintomas leves
    case "Pré-diagnóstico - grupo de risco - sintomasleves":
      let numerodeSintomas = req.body.queryResult.parameters['numerodeSintomas']
      res.json(fulfillmentMessages(prediagnosticosintomasleves2(numerodeSintomas)[0], prediagnosticosintomasleves2(numerodeSintomas)[1]))
      break;
    case "Pré-diagnóstico - grupo de risco - sintomasleves2":
      let numerodeSintomas2 = req.body.queryResult.parameters['numerodeSintomas']
      res.json(fulfillmentMessages(prediagnosticosintomasleves2(numerodeSintomas2)[0], prediagnosticosintomasleves2(numerodeSintomas2)[1]))
      break;
    case "Pré-diagnóstico - sintomas leves - yes":
      res.json({ "fulfillmentText": prediagnosticosintomasleves3()});
      break;
    case "Pré-diagnóstico - sintomas leves - yes - yes - yes":
      res.json(fulfillmentMessages(prediagnosticosintomasgraves1()[0], prediagnosticosintomasgraves1()[1]))
      break;
    case "Ajuda":
      res.json({ "fulfillmentText": ajuda()});
      break;
  }

}

module.exports = {
    botDePedidos
}


