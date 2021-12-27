require('dotenv/config');
const fetch = require('node-fetch');


const keyApi = process.env.KEY_API


function getWeatherForecast(city) {
    const UriApi = encodeURI(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&forecastDays=7&key=${keyApi}&contentType=json`)

    return fetch(UriApi, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json();
            }

            throw Error(response);
        })
        .catch((erro) => {
            console.error(erro);
        });
}

module.exports = {
    getWeatherForecast
}