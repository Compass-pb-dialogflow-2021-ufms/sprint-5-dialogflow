const chamada = require('../BancoDeDados/tabelas');

module.exports = {
    async adicionarChamada(req) {
        const resultado = await chamada.create({
            nome: req.body.nome,
            telefone: req.body.telefone,
            email: req.body.email,
            cpf: req.body.cpf,
            descricao: req.body.descricao,
            status: req.body.status
        });
        return resultado;
    },
    async chamadasAtivas() {
        const resultado = await chamada.find({status: 'ativa'});
        return resultado;
    },
    async chamadasPorCpf(cpf) {
        const resultado = await chamada.find({cpf: `${cpf}`}).exec();
        return resultado;
    },
}