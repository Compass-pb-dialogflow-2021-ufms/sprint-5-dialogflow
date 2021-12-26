const axios = require('axios')


async function getIbgeData(id)
{
    const cityWeatherInformation = await axios.get(`https://apiprevmet3.inmet.gov.br/previsao/${id}`)
    let aux2, text = 'Previsão do tempo para '       // Aux2 é só para incrementar a string de text
    const days = Object.keys(cityWeatherInformation.data[id])
    days.forEach(day => {
        const forecast = cityWeatherInformation.data[id][day] 
        if(day == days[0])
        {
            aux2 = `${forecast.manha.entidade}:\n\n\nHoje a temperatura máxima não deve passar de ${forecast.manha.temp_max}°C e a mínima ficará em ${forecast.manha.temp_min}°C.\nresumo da manhã -> ${forecast.manha.resumo}\nresumo da tarde -> ${forecast.tarde.resumo}\nresumo da noite -> ${forecast.noite.resumo}`
            text += aux2
        }
        else if(forecast.manha == undefined)
        {
            aux2 = `\n\n\n${forecast.dia_semana}: A temperatura máxima não deve passar de ${forecast.temp_max}°C e a mínima ficará em ${forecast.temp_min}°C.\nresumo do dia -> ${forecast.resumo}`
            text += aux2
        }
        else
        {
            aux2 = `\n\n\n${forecast.manha.dia_semana}: A temperatura máxima não deve passar de ${forecast.manha.temp_max}°C e a mínima ficará em ${forecast.manha.temp_min}°C.\nresumo da manhã -> ${forecast.manha.resumo}\nresumo da tarde -> ${forecast.tarde.resumo}\nresumo da noite -> ${forecast.noite.resumo}`
            text += aux2
        }
    })

    return text
}


module.exports = getIbgeData