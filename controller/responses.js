const express = require("express");
const axios = require('axios')
const baseURL = 'https://api.hgbrasil.com/weather?'

// Configuração do pacote dotenv
require("dotenv").config();

// Setando a chave API da OpenWeatherMap
const apiKey = `${process.env.API_KEY}`;

let cityName, time;
let dateDay1, dateDay2, dateDay3, dateDay4, dateDay5, dateDay6, dateDay7;
let tempMaxDay1, tempMaxDay2, tempMaxDay3, tempMaxDay4, tempMaxDay5, tempMaxDay6, tempMaxDay7;
let tempMinDay1, tempMinDay2, tempMinDay3, tempMinDay4, tempMinDay5, tempMinDay6, tempMinDay7;
let descDay1, descDay2, descDay3, descDay4, descDay5, descDay6, descDay7;

module.exports = () => {
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
 res.send('Servidor online.');
})

app.post('/', async (req, res) => {
 
  const tag = req.body.queryResult.intent.displayName;
  console.log(req.body.queryResult)
  let jsonResponse = {
    fulfillment_messages: [
      {
        text: {
          text: [],
        },
      },
    ],
  };
  
  let objMessage = jsonResponse.fulfillment_messages[0];
  if (tag === 'Default Welcome Intent') {
    objMessage.text.text.push('Olá, eu sou o TempoBot. Estou aqui para encontrar a previsão do tempo para a sua cidade. Exemplo: Previsão do tempo para São Paulo')
  } else if (tag === 'previsao') {
    try {
      const response = await axios.get(`${baseURL}array_limit=9&city_name=${req.body.queryResult.parameters['supported-city']}&fields=only_results,temp,city_name,time,forecast,max,min,description,date&key=${apiKey}`)
      
      cityName = response.data.city_name;
      time = response.data.time;

      dateDay1 = response.data.forecast[2].date;
      tempMaxDay1 = response.data.forecast[2].max;
      tempMinDay1 = response.data.forecast[2].min;
      descDay1 = response.data.forecast[2].description;

      dateDay2 = response.data.forecast[3].date;
      tempMaxDay2 = response.data.forecast[3].max;
      tempMinDay2 = response.data.forecast[3].min;
      descDay2 = response.data.forecast[3].description;

      dateDay3 = response.data.forecast[4].date;
      tempMaxDay3 = response.data.forecast[4].max;
      tempMinDay3 = response.data.forecast[4].min;
      descDay3 = response.data.forecast[4].description;

      dateDay4 = response.data.forecast[5].date;
      tempMaxDay4 = response.data.forecast[5].max;
      tempMinDay4 = response.data.forecast[5].min;
      descDay4 = response.data.forecast[5].description;

      dateDay5 = response.data.forecast[6].date;
      tempMaxDay5 = response.data.forecast[6].max;
      tempMinDay5 = response.data.forecast[6].min;
      descDay5 = response.data.forecast[6].description;

      dateDay6 = response.data.forecast[7].date;
      tempMaxDay6 = response.data.forecast[7].max;
      tempMinDay6 = response.data.forecast[7].min;
      descDay6 = response.data.forecast[7].description;

      dateDay7 = response.data.forecast[8].date;
      tempMaxDay7 = response.data.forecast[8].max;
      tempMinDay7 = response.data.forecast[8].min;
      descDay7 = response.data.forecast[8].description;
      
    } catch (error) {
      console.log(error);
    }
    
   
    
    console.log(req.body.queryResult.parameters['supported-city'])
    objMessage.text.text.push(` Previsão para ${cityName} - Última atualização: ${time} |
    Dia: ${dateDay1}. Máxima/mínima: ${tempMaxDay1}°C/${tempMinDay1}°C - ${descDay1}\n | 
    Dia: ${dateDay2}. Máxima/mínima: ${tempMaxDay2}°C/${tempMinDay2}°C - ${descDay2}\n | 
    Dia: ${dateDay3}. Máxima/mínima: ${tempMaxDay3}°C/${tempMinDay3}°C - ${descDay3}\n |
    Dia: ${dateDay4}. Máxima/mínima: ${tempMaxDay4}°C/${tempMinDay4}°C - ${descDay4}\n |
    Dia: ${dateDay5}. Máxima/mínima: ${tempMaxDay5}°C/${tempMinDay5}°C - ${descDay5}\n |
    Dia: ${dateDay6}. Máxima/mínima: ${tempMaxDay6}°C/${tempMinDay6}°C - ${descDay6}\n |
    Dia: ${dateDay7}. Máxima/mínima: ${tempMaxDay7}°C/${tempMinDay7}°C - ${descDay7}\n `);

    req.body.queryResult.parameters['supported-city'] === '';
  } else if (tag === 'cidadesNaoSuportadas') {
    objMessage.text.text.push('Cidades estrangeiras não são suportadas pelo sistemas. Por favor, informe uma cidade brasileira.')
  }else if (tag === 'Default Welcome Intent') {
    objMessage.text.text.push('Desculpe, eu não consegui entender a última frase. Você poderia repetir? Lembre-se do exemplo: "Previsão para (nome da cidade)"')
  }else {
    objMessage.text.text.push('Já vai? Tudo bem. Espero que eu tenha te ajudado. Sempre que precisar estarei aqui, até mais!')
    
  }
  res.send(jsonResponse);
})
    return app;
}

