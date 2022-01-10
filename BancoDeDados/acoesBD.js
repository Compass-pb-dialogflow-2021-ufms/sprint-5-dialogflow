const usuario = require('./tabelaUsuario');
const diagnostico = require('./tabelaDiagnostico');

module.exports = {
    async buscaUsuario(idUsuario){
        const resultado = await usuario.findOne({idUsuario : `${idUsuario}`}).exec();
        return resultado;
    },
    async adicionarUsuario(req){
        const resultado = await usuario.create(req.body);
        return resultado;
    },
    async buscarSession(session){
        const resultado = await diagnostico.findOneAndUpdate({session : `${session}`}, 
        {$set : {
            grupoDeRisco: false,
            febre: false,
            poucoSintomasLeves: false,
            muitoSintomasLeves: false,
            sintomasGraves: false
        }}).exec();
        return resultado;
    },
    async adicionarDiagnostico(req){
        const resultado = await diagnostico.create(req.body);
        return resultado;
    },
    async atualizar(session,dados){
        const resultado = await diagnostico.findOneAndUpdate({session : `${session}`},
        {$set : dados});
        return resultado;
    },
    
    async buscarDadosDiagnostico(session){
        const resultado = await diagnostico.findOne({session : `${session}`});
        return resultado;
    }
    
    
}