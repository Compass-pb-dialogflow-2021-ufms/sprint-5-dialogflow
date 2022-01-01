const supportApi = require('../api/supportApi')

module.exports = function (req, res) {
    const reqIntent = req.body.queryResult.intent.displayName;

    switch (reqIntent) {
        case 'Saudacao':
            supportApi.welcomeUser(req, res);
            break;
        case 'Ajuda':
            supportApi.helpUser(req, res);
            break;
        case 'ProblemaHardware':
            supportApi.hardWareProblem(req, res);
            break;
        case 'ProblemaSoftware':
            supportApi.softWareProblem(req, res);
            break;
        case 'SolucaoPaliativa':
            supportApi.giveMinorSolution(req, res)
            break;
        case 'Despedida':
            supportApi.farewellUser(req, res);
            break;
        case 'SolucaoPaliativaFollowupSim':
            supportApi.finishDialog(req, res);
            break;
        case 'SolucaoPaliativaFollowupNao':
            supportApi.askUserCreateTicket(req, res);
            break;
        case 'SolucaoPaliativaAceitaChamada':
            supportApi.redirectToCreateTicket(req, res);
            break;
        case 'CriarChamada':
            supportApi.createTicket(req, res);
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