const axios = require('axios')
const Usuario = require('../modelo/usuario')
const convert = require('xml-js')

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
        if(resposta == false){
            res.json({ "fulfillmentText": "Olá, seja bem vindo ao chatbot sobre previsões do tempo. Quer ver a previsão da sua cidade? Basta digitar o nome dela para mim!"});
        }else{
            res.json({ "fulfillmentText": "Olá, " + novoNome + " seja bem vindo novamente ao chatbot sobre previsões do tempo. Quer ver a temperatura da sua cidade? Basta digitar o nome dela para mim!"});
        }
        break;
    case "Temperatura":
        let cityAsked = req.body.queryResult.parameters.location['city']
        const apiTempResponse = await axios.get(`http://servicos.cptec.inpe.br/XML/listaCidades?city=${cityAsked}`)
        
        let xml = apiTempResponse.data;
        console.log(apiTempResponse)
        let result = convert.xml2json(xml, {compact: true, spaces: 6});
        let xmlToJSON = JSON.parse(result);
        let cities;
        let dealWithOneCity = xmlToJSON.cidades.cidade
        var firstKey = Object.keys(dealWithOneCity)[0];
        if(firstKey == 'nome'){
            cities = xmlToJSON.cidades.cidade.id._text
        }else{
            cities = xmlToJSON.cidades.cidade[0].id._text
        }
        const apiTempMaxMinResponse = await axios.get(`http://servicos.cptec.inpe.br/XML/cidade/7dias/${cities}/previsao.xml`)
        let xmlMaxMin = apiTempMaxMinResponse.data;
        let resultMinMax = convert.xml2json(xmlMaxMin, {compact: true, spaces: 4});
        let xmlMinMaxToJSON = JSON.parse(resultMinMax);
        let citiesMaxMin = xmlMinMaxToJSON
        let actualDayTemp = citiesMaxMin.cidade.previsao
        res.json({ "fulfillmentText": "Previsão do tempo para os próximos 7 dias em " + cityAsked + " são: " + 
                                        " Max: " + actualDayTemp[0].maxima._text + " Min: " + actualDayTemp[0].minima._text +
                                        " /Max: " + actualDayTemp[1].maxima._text + " Min: " + actualDayTemp[1].minima._text +
                                        " /Max: " + actualDayTemp[2].maxima._text + " Min: " + actualDayTemp[2].minima._text +
                                        " /Max: " + actualDayTemp[3].maxima._text + " Min: " + actualDayTemp[3].minima._text +
                                        " /Max: " + actualDayTemp[4].maxima._text + " Min: " + actualDayTemp[4].minima._text +
                                        " /Max: " + actualDayTemp[5].maxima._text + " Min: " + actualDayTemp[5].minima._text});
        break;
    case "Despedida":
        res.json({ "fulfillmentText": "Até mais, quando precisar é so mandar um olá!"});
        break;
  }

   

}

module.exports = {
    botDePedidos
}