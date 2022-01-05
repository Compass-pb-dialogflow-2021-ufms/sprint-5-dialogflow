const covInfoApi = require('../api/covInfoApi')

module.exports = function (req, res) {
    const reqIntent = req.body.queryResult.intent.displayName;


    switch (reqIntent) {
        case 'Saudacao':
            covInfoApi.welcomeUser(req, res);
            break;
        case 'Ajuda':
            covInfoApi.helpUser(req, res);
            break;
        case 'Despedida':
            supportApi.farewellUser(req, res);
            break;
        case 'FallbackPadrao':
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