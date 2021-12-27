require('dotenv').config()
const axios = require('axios')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function getWeatherForecast(parameters)
{
    const key = process.env.KEY
    let city
    const values = Object.values(parameters)
    values.forEach(value => {
        if(value != '')
            city = value
    });

    if(city == 'São Paulo') //tratamento de exceção
        return '3550308'
    if(city == 'Costa Rica') //tratamento de exceção
        return '5003256'
    
    const request = await fetch(`https://geocode.xyz/${city}?region=BR&geoit=JSON&auth=${key}`)
    const data = await request.json()

    if(data.error == undefined)
    {
        const latitude = data.latt
        const longitude = data.longt
        const coordinates = `${latitude},${longitude}`
    
        try
        {
            const getId = await axios.get(`https://geocode.xyz/${coordinates}?json=1&auth=${key}`)
        
            const id = getId.data.adminareas.admin8.IBGE_GEOCODIGO 
            return id
        }
        catch(erro)
        {
            return 'Esse bot utiliza serviços gratuitos para conseguir os dados de previsão climática, portanto há um limite nas requisições. Por favor, aguarde um pouco e tente novamente.'
        }
    }
    else
    {
        return 'O município informado não foi localizado. Confirme se ele foi digitado corretamente. Caso o erro persista, consulte o nosso menu de ajuda, lá falamos sobre as limitações que o bot possui.'
    }
}


module.exports = getWeatherForecast