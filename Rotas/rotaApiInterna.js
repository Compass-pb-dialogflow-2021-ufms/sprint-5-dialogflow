const roteador = require('express').Router();
const padrao = require('../Intencoes/respostasPadrao');
const chamada = require('../Intencoes/respostasChamada');
const hardware = require('../Intencoes/respostasHardware');
const software = require('../Intencoes/respostasSoftware');
const listagem = require('../Intencoes/respostasListagens');
roteador.post('/', async (req, res) => {
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
    } else if (tag === 'Default Fallback Intent') {
      objetoMensagens.text.text.push(padrao.fallback());
    } else if (tag === 'menu') {
      objetoMensagens.text.text.push(padrao.menu());
    } else if (tag === 'despedida') {
      objetoMensagens.text.text.push(padrao.despedida());
//////////////////////////////////////////////////////////////////////////////////////////////////////////////      
    } else if (tag === 'chamada') {
      objetoMensagens.text.text.push(chamada.inicioChamada());
    } else if (tag === 'chamadaNome') {
      objetoMensagens.text.text.push(chamada.chamadaNome(parametros));
    } else if (tag === 'chamadaTelefone') {
      objetoMensagens.text.text.push(chamada.chamadaTelefone(parametros));
    } else if (tag === 'chamadaEmail') {
      objetoMensagens.text.text.push(chamada.chamadaEmail(parametros));
    } else if (tag === 'chamadaCpf') {
      objetoMensagens.text.text.push(chamada.chamadaCpf(parametros));
    } else if (tag === 'chamadaDescProblema') {
      objetoMensagens.text.text.push(await chamada.chamadaDescProblema(parametros));
      ////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else if (tag === 'hardware') {
      objetoMensagens.text.text.push(hardware.cacaProblema(parametros));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
    } else if (tag === 'listaChamadasAtivas') {
      objetoMensagens.text.text.push(await listagem.chamadasAtivas());
    } else if (tag === 'listaChamadasPorCpf') {
      objetoMensagens.text.text.push(listagem.inicioChamadasCpf());
    } else if (tag === 'listaChamadaCPF') {
      objetoMensagens.text.text.push(await listagem.chamadasPorCpf(parametros));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    
    } else if (tag === 'software') {
      objetoMensagens.text.text.push(software.problemaSoftware(parametros.software));
    } 
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
    res.send(jsonResponse);
  })


module.exports = roteador;