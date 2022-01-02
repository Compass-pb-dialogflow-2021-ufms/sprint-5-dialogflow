const axios = require('axios')
const Usuario = require('../modelo/usuario')
const Chamado = require('../modelo/chamado')


const hardware = require('../intents/hardware')
const software = require('../intents/software')
const welcome = require('../intents/welcome')
const telegramUser = require('../messagingServices/telegramUser')
const chamadoText = require('../intents/chamado')
const criarChamadonoBanco = require('../modelo/criarChamadonoBanco')
const ultimosChamadosIntent = require('../intents/ultimoschamados')

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
        res.json({"fulfillmentText": welcome(novoNome, resposta)})
        break;
    case "Hardware":
        let problem = req.body.queryResult.parameters["hardwareProblema"]
        res.json({ "fulfillmentText": hardware(problem)});
        break;
    case "Software":
        let problemSoftware = req.body.queryResult.parameters["softwareProblema"]
        let softwareName = req.body.queryResult.parameters["software"]
        res.json({ "fulfillmentText": software(problemSoftware, softwareName)});
        break;
    case "Chamado":
        let callName = req.body.queryResult.parameters.nome["name"]
        let callPhone = req.body.queryResult.parameters["telefoneContato"]
        let callEmail = req.body.queryResult.parameters['email']
        let callCpf = req.body.queryResult.parameters['cpf']
        let callDescricao = req.body.queryResult.parameters['descricaoProblema']
        criarChamadonoBanco(callName, callPhone, callEmail, callCpf, callDescricao)
        res.json({ "fulfillmentText": chamadoText(callName)});
        break;
    case "Hardware - yes":
        let anotherName = req.body.queryResult.parameters.nome["name"]
        let anotherPhone = req.body.queryResult.parameters["telefoneContato"]
        let anotheremail = req.body.queryResult.parameters['email']
        let anothercpf = req.body.queryResult.parameters['cpf']
        let anotherdescricao = req.body.queryResult.parameters['descricaoProblema']
        criarChamadonoBanco(anotherName, anotherPhone, anotheremail, anothercpf, anotherdescricao)
        res.json({ "fulfillmentText": chamadoText(anotherName)});
        break;
    case "Ultimos Chamados":
        const ultimosChamados = await Chamado.find()
        let lastCalls = ultimosChamadosIntent(ultimosChamados)
        res.json({ "fulfillmentText": lastCalls});
        break;
  }

}

module.exports = {
    botDePedidos
}