const padrao = require('./Intencoes/respostasPadrao');
const prevencao = require('./Intencoes/respostasPrevencao');
const contagio = require('./Intencoes/respostasContagio');
const saudacao = require('./Intencoes/saudacao/controldorSaudacao');
const respostasPD = require('./Intencoes/preDiagnostico/controladorPreDiagnostico');
const fallback = require('./Intencoes/fallbacks/fallbacks');
const fallbackPD = require('./Intencoes/fallbacks/fallbackPreDiagnostico');
module.exports = [
    {
        intent: 'Default Welcome Intent',
        parametro: true,
        funcao:  async function(req){
           return await saudacao.saudacaoUsuario(req)
        }
    },
    {
        intent: 'Default Fallback Intent',
        parametro: false,
        funcao: function(){
            return padrao.fallback()

        }
    },
    {
        intent: 'menu',
        parametro: false,
        funcao: function(){
            return padrao.menu

        }
    },
    {
        intent: 'encerramento',
        parametro: false,
        funcao: function(){
            return padrao.encerramento()

        }
    },
    //////////////////////////////////
    {
        intent: 'PV-prevencao',
        parametro: false,
        funcao: function(){
            return prevencao.prevencao
        }
    },
    {
        intent: 'PV-cuidadosBasicosProfissionais',
        parametro: false,
        funcao: function(){
            return prevencao.cuidadosBasicosProfissionais
        }
    },
    {
        intent: 'PV-cuidadosBasicosCivis',
        parametro: false,
        funcao: function(){
            return prevencao.cuidadosBasicosCivis
        }
    },
    {
        intent: 'PV-fallbackPrevencao',
        parametro: false,
        funcao: function(){
            return fallback.umFallbackPrevencao()
        }
    },
    {
        intent: 'PV-fallbackPrevencao2',
        parametro: false,
        funcao: function(){
            return fallback.doisfallback()
        }
    },
    ///////////////////////////////////////////////////////////////
    {
        intent: 'CT-contagio',
        parametro: false,
        funcao: function(){
            return contagio.contagio()
        }
    },
    {
        intent: 'CT-incubacao',
        parametro: false,
        funcao: function(){
            return contagio.incubacao()
        }
    },
    {
        intent: 'CT-formasContagio',
        parametro: false,
        funcao: function(){
            return contagio.formasContagio()
        }
    },
    {
        intent: 'CT-fallbackContagio',
        parametro: false,
        funcao: function(){
            return fallback.umFallbackContagio()
        }
    },
    {
        intent: 'CT-fallbackContagio2',
        parametro: false,
        funcao: function(){
            return fallback.doisfallback()
        }
    },
///////////////////////////////////////////////////////////////////////////////////////////////////////////    
    {
        intent: 'PD-PreDiagnostico',
        parametro: false,
        funcao: function(){
            return respostasPD.inicioPreDiagnostico()
        }
    },
    {
        intent: 'PD-naoPreDiagnostico',
        parametro: false,
        funcao: function(){
            return respostasPD.naoPrediagnostico()
        }
    },
    {
        intent: 'PD-simPreDiagnostico',
        parametro: false,
        funcao: function(){
            return respostasPD.simPrediagnostico()
        }
    },
    {
        intent: 'PD-simGrupoDeRisco',
        parametro: false,
        funcao: function(){
            return respostasPD.simGrupoDeRisco()
        }
    },
    {
        intent: 'PD-naoGrupoDeRisco',
        parametro: false,
        funcao: function(){
            return respostasPD.naoGrupoDeRisco()
        }
    },
    {
        intent: 'PD-naoFebre',
        parametro: false,
        funcao: function(){
            return respostasPD.naoFebre()
        }
    },
    {
        intent: 'PD-simFebre',
        parametro: false,
        funcao: function(){
            return respostasPD.simFebre()
        }
    },
    {
        intent: 'PD-simSintomasLeves',
        parametro: false,
        funcao: function(){
            return respostasPD.simSintomasLeves()
        }
    },
    {
        intent: 'PD-naoSintomasLeves',
        parametro: false,
        funcao: function(){
            return respostasPD.naoSintomasLeves()
        }
    },
    {
        intent: 'PD-qtdSintomasLeves',
        parametro: true,
        funcao: function(req){
            return respostasPD.qtdSintomasLeves(req)
        }
    },
    {
        intent: 'PD-simRemedio',
        parametro: false,
        funcao: function(){
            return respostasPD.simRemedio()
        }
    },
    {
        intent: 'PD-naoRemedio',
        parametro: false,
        funcao: function(){
            return respostasPD.naoRemedio()
        }
    },
    {
        intent: 'PD-simMelhora',
        parametro: false,
        funcao: function(){
            return respostasPD.simMelhora()
        }
    },
    {
        intent: 'PD-naoMelhora',
        parametro: false,
        funcao: function(){
            return respostasPD.naoMelhora()
        }
    },
    {
        intent: 'PD-simSintomasGraves',
        parametro: false,
        funcao: function(){
            return respostasPD.simSintomasGraves()
        }
    },
    {
        intent: 'PD-naoSintomasGraves',
        parametro: false,
        funcao: function(){
            return respostasPD.naoSintomasGraves()
        }
    },
    {
        intent: 'PD-fallbackGrupoDeRisco',
        parametro: false,
        funcao: function(){
            return fallbackPD.fallbackGrupoDeRisco()
        }
    },
    {
        intent: 'PD-fallbackGrupoDeRisco2',
        parametro: false,
        funcao: function(){
            return fallbackPD.fallbackGrupoDeRisco2()
        }
    },
    {
        intent: 'PD-fallbackFebre',
        parametro: false,
        funcao: function(){
            return fallbackPD.fallbackFebre()
        }
    },
    {
        intent: 'PD-fallbackFebre2',
        parametro: false,
        funcao: function(){
            return fallbackPD.fallbackFebre2()
        }
    },
    {
        intent: 'PD-fallbackSintomasLeves',
        parametro: false,
        funcao: function(){
            return fallbackPD.fallbackSintomasLeves()
        }
    },
    {
        intent: 'PD-fallbackSintomasLeves2',
        parametro: false,
        funcao: function(){
            return fallbackPD.fallbackSintomasLeves2()
        }
    },
    {
        intent: 'PD-fallbackQtdSintomasLeves',
        parametro: false,
        funcao: function(){
            return fallbackPD.fallbackQtdSintomasLeves()
        }
    },
    {
        intent: 'PD-fallbackQtdSintomasLeves2',
        parametro: false,
        funcao: function(){
            return fallbackPD.fallbackQtdSintomasLeves2()
        }
    },
    {
        intent: 'PD-fallbackRemedio',
        parametro: false,
        funcao: function(){
            return fallbackPD.fallbackRemedio()
        }
    },
    {
        intent: 'PD-fallbackRemedio2',
        parametro: false,
        funcao: function(){
            return fallbackPD.fallbackRemedio2()
        }
    },
    {
        intent: 'PD-fallbackMelhora',
        parametro: false,
        funcao: function(){
            return fallbackPD.fallbackMelhora()
        }
    },
    {
        intent: 'PD-fallbackMelhora2',
        parametro: false,
        funcao: function(){
            return fallbackPD.fallbackMelhora2()
        }
    },
    {
        intent: 'PD-fallbackSintomasGraves',
        parametro: false,
        funcao: function(){
            return fallbackPD.fallbackSintomasGraves()
        }
    },
    {
        intent: 'PD-fallbackSintomasGraves2',
        parametro: false,
        funcao: function(){
            return fallbackPD.fallbackSintomasGraves2()
        }
    },
    
]