const axios = require('axios')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function getWeatherForecast(parameters)
{
    let city
    const values = Object.values(parameters)
    values.forEach(value => {
        if(value != '')
            city = value
    });

    const request = await fetch(`https://geocode.xyz/${city}?region=BR&geoit=JSON`)
    const data = await request.json()

    if(data.error == undefined)
    {
        const latitude = data.latt
        const longitude = data.longt
        const coordinates = `${latitude},${longitude}`
    
        const getId = await axios.get(`https://geocode.xyz/${coordinates}?json=1`)
        
        const id = getId.data.adminareas.admin8.IBGE_GEOCODIGO 
        return id
        // const eventName = 'aa'
        // const eventTriggerParameters = [eventName, id]
        // return eventTriggerParameters
    }
    else
    {
        const errorCode = data.error.code
    }


    // console.log(getId.data.adminareas.admin8.IBGE_GEOCODIGO)

}


module.exports = getWeatherForecast