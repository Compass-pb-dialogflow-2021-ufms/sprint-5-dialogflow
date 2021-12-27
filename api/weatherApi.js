const weatherService = require('../service/weatherForecastService');
const translate = require('../utils/translateCondition');
const dateFormatter = require('../utils/dateFormatter');

function welcomeUser(req, res) {
    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    `Olá, eu sou o ChatBot da Previsão do tempo\nPara começar, digite "Iniciar"`,
                ]
            }
        }]
    })
}

function helpUser(req, res) {
    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    `Você pode perguntar qual a previsão do tempo para qualquer cidade brasileira`,
                ]
            }
        }]
    })
}

async function getWeather(req, res) {

    if (req.body.queryResult.parameters.cidade.length === 0) {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Qual a cidade que você gostaria de saber a previsão?`,
                    ]
                }
            }]
        })
    }

    try {

        const weatherRes = await weatherService.getWeatherForecast(req.body.queryResult.parameters.cidade.city);

        const country = weatherRes.resolvedAddress;

        const countrySplit = country.split(', ');

        if (countrySplit[2] != 'Brasil') {
            return res.send({
                "fulfillmentMessages": [{
                    "text": {
                        "text": [
                            `Eu só consigo mostrar a previsão do tempo para cidades do Brasil, informe uma cidade brasileira`,
                        ]
                    }
                }]
            })
        }

        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Agora em ${weatherRes.resolvedAddress} está ${weatherRes.currentConditions.temp}°, ${translate.translateCondition(weatherRes.days[0].conditions)}\n\n${dateFormatter.formatDate(weatherRes.days[1].datetime)} Máxima de ${weatherRes.days[1].tempmax}° Minima de ${weatherRes.days[1].tempmin}°, ${translate.translateCondition(weatherRes.days[1].conditions)}\n\n${dateFormatter.formatDate(weatherRes.days[2].datetime)} Máxima de ${weatherRes.days[2].tempmax}° Minima de ${weatherRes.days[2].tempmin}°, ${translate.translateCondition(weatherRes.days[2].conditions)}\n\n${dateFormatter.formatDate(weatherRes.days[3].datetime)} Máxima de ${weatherRes.days[3].tempmax}° Minima de ${weatherRes.days[3].tempmin}°, ${translate.translateCondition(weatherRes.days[3].conditions)}\n\n${dateFormatter.formatDate(weatherRes.days[4].datetime)} Máxima de ${weatherRes.days[4].tempmax}° Minima de ${weatherRes.days[4].tempmin}°, ${translate.translateCondition(weatherRes.days[4].conditions)}\n\n${dateFormatter.formatDate(weatherRes.days[5].datetime)} Máxima de ${weatherRes.days[5].tempmax}° Minima de ${weatherRes.days[5].tempmin}°, ${translate.translateCondition(weatherRes.days[5].conditions)}\n\n${dateFormatter.formatDate(weatherRes.days[6].datetime)} Máxima de ${weatherRes.days[6].tempmax}° Minima de ${weatherRes.days[6].tempmin}°, ${translate.translateCondition(weatherRes.days[6].conditions)}\n\n${dateFormatter.formatDate(weatherRes.days[7].datetime)} Máxima de ${weatherRes.days[7].tempmax}° Minima de ${weatherRes.days[7].tempmin}°, ${translate.translateCondition(weatherRes.days[7].conditions)}`,
                    ]
                }
            }]
        })

    } catch {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Desculpe mas não encontrei a cidade`,
                    ]
                }
            }]
        })
    }
}

function farewellUser(req, res) {
    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    `Até logo, espero ter te ajudado`,
                ]
            }
        }]
    })
}

module.exports = {
    welcomeUser,
    helpUser,
    getWeather,
    farewellUser
}