const weatherApi = require('../api/weatherApi')

module.exports = function (req, res) {
    const reqIntent = req.body.queryResult.intent.displayName;

    switch (reqIntent) {
        case 'Saudacao':
            weatherApi.welcomeUser(req, res);
            break;
        case 'Ajuda':
            weatherApi.helpUser(req, res);
            break;
        case 'ConsultarPrevisao':
            weatherApi.getWeather(req, res);
            break;
        case 'Despedida':
            weatherApi.farewellUser(req, res);
            break;
        case 'Default Fallback Intent':
            return res.send({
                "fulfillmentMessages": [{
                    "text": {
                        "text": [
                            `Lamento, mas não compreendi\nDigite "ajuda", por favor`
                        ]
                    }
                }]
            });
        default:
    }
}