module.exports = {
    ...require('./respostas/saudacao/controldorSaudacao'),
    ...require('./respostas/preDiagnostico/controladorPreDiagnostico'),
    ...require('./respostas/respostasContagio'),
    ...require('./respostas/respostasPrevencao'),
    ...require('./respostas/respostasPadrao'),
    ...require('./respostas/fallbacks/fallbacks'),
    ...require('./respostas/fallbacks/fallbackPreDiagnostico')
}