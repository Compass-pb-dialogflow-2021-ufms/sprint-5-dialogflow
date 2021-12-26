const { API, API_TOKEN } = require('../API/connection')

const switchIntent = (req, res, intent) => {
    switch (intent) {
        case 'Default Welcome Intent':
            defaultWelcomeIntent(req, res)
            break
        case 'Default Fallback Intent':
            defaultFallbackIntent(req, res)
            break
        case 'Farewell Intent':
            farewellIntent(req, res)
            break
        case 'Forecast Weather Intent':
            forecastWeatherIntent(req, res)
            break
    }
}

const defaultWelcomeIntent = (req, res) => {
    const response = {
        fulfillmentText: [
              'Olá ! Sou seu metereologista pessoal.\n\n'
            + 'Posso dizer o clima de qualquer cidade do Brasil, quando precisar é só me chamar.'
        ]
    }

    res.send(response)
}

const defaultFallbackIntent = (req, res) => {
    const response = {
        fulfillmentText: [
            'Desculpe mas eu não trato desses assuntos.'
        ]
    }

    res.send(response)
}

const farewellIntent = (req, res) => {
    const response = {
        fulfillmentText: [
              'Sempre que precisar é só me chamar.\n'
            + 'Até mais e lembre-se, se for sair leve um casaquinho.'
        ]
    }

    res.send(response)
}

const forecastWeatherIntent = async (req, res) => {
    try {
        let response
        let forecastDay = req.body.queryResult.parameters.forecastDay
        const city = (req.body.queryResult.parameters.city.city).normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        const today = new Date(new Date().toISOString().split('T')[0])

        const APIResponse = await API(`/forecast/daily?city=${city}&country=BR&lang=pt&key=${API_TOKEN}`)
            .then(result => {
                if (result.status === 204) throw 'unknownForeignCity'

                return result.data
            })

        if (forecastDay === '') {
            response = {
                fulfillmentText: [
                      `Confira a previsão para a semana a partir de hoje na cidade de ${city}.\n\n`
                    + `Para hoje teremos: ${APIResponse.data[0].weather.description}\n`
                    + `Com máxima de: ${APIResponse.data[0].max_temp} ºC\n`
                    + `E mínima de: ${APIResponse.data[0].low_temp} ºC\n\n`
                    + `Para amanhã teremos: ${APIResponse.data[1].weather.description}\n`
                    + `Com máxima de: ${APIResponse.data[1].max_temp} ºC\n`
                    + `E mínima de: ${APIResponse.data[1].low_temp} ºC\n\n`
                    + `Para o dia ${APIResponse.data[2].datetime} teremos: ${APIResponse.data[2].weather.description}\n`
                    + `Com máxima de: ${APIResponse.data[2].max_temp} ºC\n`
                    + `E mínima de: ${APIResponse.data[2].low_temp} ºC\n\n`
                    + `Para o dia ${APIResponse.data[3].datetime} teremos: ${APIResponse.data[3].weather.description}\n`
                    + `Com máxima de: ${APIResponse.data[3].max_temp} ºC\n`
                    + `E mínima de: ${APIResponse.data[3].low_temp} ºC\n\n`
                    + `Para o dia ${APIResponse.data[4].datetime} teremos: ${APIResponse.data[4].weather.description}\n`
                    + `Com máxima de: ${APIResponse.data[4].max_temp} ºC\n`
                    + `E mínima de: ${APIResponse.data[4].low_temp} ºC\n\n`
                    + `Para o dia ${APIResponse.data[5].datetime} teremos: ${APIResponse.data[5].weather.description}\n`
                    + `Com máxima de: ${APIResponse.data[5].max_temp} ºC\n`
                    + `E mínima de: ${APIResponse.data[5].low_temp} ºC\n\n`
                    + `Para o dia ${APIResponse.data[6].datetime} teremos: ${APIResponse.data[6].weather.description}\n`
                    + `Com máxima de: ${APIResponse.data[6].max_temp} ºC\n`
                    + `E mínima de: ${APIResponse.data[6].low_temp} ºC\n\n`
                    + 'Posso ajudar em algo mais ?'
                ]
            }
        } else {
            forecastDay = new Date(forecastDay.split('T')[0])
            const daysDiff = (forecastDay - today)/ (1000*60*60*24)
            if (daysDiff > 6) throw 'extrapolatedDate'

            response = {
                fulfillmentText: [
                      `A previsão do ${APIResponse.data[daysDiff].datetime} para a cidade de ${city} é de: ${APIResponse.data[daysDiff].weather.description}.\n`
                    + `Com máxima de: ${APIResponse.data[daysDiff].max_temp} ºC\n`
                    + `E mínima de: ${APIResponse.data[daysDiff].low_temp} ºC\n\n`
                    + 'Lembrando que você também pode pedir a previsão de uma semana inteira.\n'
                    + 'Além disso, posso ajudar em algo mais ?'
                ]
            }
        }

        res.send(response)
    } catch (error) {
        let errorMsg
        switch (error) {
            case 'unknownForeignCity':
                errorMsg = {
                    fulfillmentText: [
                          'Ops! Parece que essa cidade não existe ou está fora do Brasil.\n\n'
                        + 'Eu apenas consigo fazer minhas previsões em cidades brasileiras, tome cuidado também com erros de digitação que as vezes fazem eu não entender.'
                    ]
                }
                break
            case 'extrapolatedDate':
                errorMsg = {
                    fulfillmentText: [
                        'Desculpe, mas só consigo informar o clima e temperatura de dias dentro de uma semana.'
                    ]
                }
                break
            default:
                errorMsg = {
                    fulfillmentText: [
                        'Ops! Parece que alguns de nossos serviços estão fora do ar.\n'
                        + 'Tente novamente mais tarde.'
                    ]
                }
                break
        }

        res.send(errorMsg)
    }
}

const main = (req, res) => {
    const intent = req.body.queryResult.intent.displayName

    switchIntent(req, res, intent)
}

module.exports = {
    main
}