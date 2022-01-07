const covInfoApi = require('../api/covInfoApi')

module.exports = function (req, res) {
    const reqIntent = req.body.queryResult.intent.displayName;


    switch (reqIntent) {
        case 'Saudacao':
            return covInfoApi.welcomeUser(req, res);

        case 'Ajuda':
            return covInfoApi.helpUser(req, res);

        case 'Encerramento':
            return covInfoApi.farewellUser(req, res);

        case 'PrevencaoFluxoInicial':
            return covInfoApi.askWichPrevention(req, res);

        case 'PrevencaoBasica':
            return covInfoApi.getBasicPrevention(req, res);

        case 'PrevencaoBasicaFolloupSim':
            return covInfoApi.redirectToMainMenu(req, res);

        case 'PrevencaoBasicaFolloupNao':
            return covInfoApi.redirectToEndConversation(req, res);

        case 'PrevencaoProfissional':
            return covInfoApi.getHealthProfessionalPrevention(req, res);

        case 'PrevencaoProfissionalFollowupSim':
            return covInfoApi.redirectToMainMenu(req, res);

        case 'PrevencaoProfissionalFollowupNao':
            return covInfoApi.redirectToEndConversation(req, res);

        case 'ContagioFluxoInicial':
            return covInfoApi.askWichContagion(req, res);

        case 'FormasContagio':
            return covInfoApi.getInfoContagion(req, res);

        case 'FormasContagioFollowupSim':
            return covInfoApi.redirectToMainMenu(req, res);

        case 'FormasContagioFollowupNao':
            return covInfoApi.redirectToEndConversation(req, res);

        case 'Incubacao':
            return covInfoApi.getInfoIncubation(req, res);

        case 'IncubacaoFollowupSim':
            return covInfoApi.redirectToMainMenu(req, res);

        case 'IncubacaoFollowupNao':
            return covInfoApi.redirectToEndConversation(req, res);

        case 'PreDiagnostico':
            return covInfoApi.askPreDiagnosis(req, res);

        case 'PreDiagnosticoFpSimPerguntaGrupo':
            return covInfoApi.askRiskGroup(req, res);

        case 'PreDiagnosticoFpNaoCancela':
            return covInfoApi.askPreDiagnosisSecond(req, res);

        case 'PreDiagnosticoCanceladoSim':
            return covInfoApi.redirectToMainMenu(req, res);

        case 'PreDiagnosticoCanceladoNao':
            return covInfoApi.redirectToEndConversation(req, res);

        case 'ConfirmaGrupoDeRisco':
            return covInfoApi.userBelongRiskGroup(req, res);

        case 'ConfirmaFebreDiagnostico':
            return covInfoApi.redirectToMildSymptoms(req, res);

        case 'PreDiagnosticoSintomaLeve':
            return covInfoApi.askMildSymptoms(req, res);

        case 'InformaSintomas':
            return covInfoApi.identifySymptoms(req, res);

        case 'ConfirmaUsoRemedio':
            return covInfoApi.askIfBetter(req, res);

        case 'ConfirmaSenteMelhor':
            return covInfoApi.redirectToStrongSymptoms(req, res);

        case 'NaoSenteMelhor':
            return covInfoApi.redirectToStrongSymptoms(req, res);

        case 'PreDiagnosticoSintomaGrave':
            return covInfoApi.askStrongSymptoms(req, res);

        case 'InformaSintomaGrave':
            return covInfoApi.redirectToResult(req, res);

        case 'ResultadoDiagnostico':
            return covInfoApi.showResult(req, res);

        case 'MenuPrincipal':
            return covInfoApi.showMainMenu(req, res);

        case 'FallbackPadrao':
            return covInfoApi.defaultFallBack(req, res)
        default:
    }
}