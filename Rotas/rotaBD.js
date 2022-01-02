const roteador = require('express').Router();
const chamada = require('../BancoDeDados/acoesBD');

roteador.get('/ativas', async (req,res) => {
    try{
        const resultado = await chamada.chamadasAtivas();
        return res.json(resultado);
    }catch (erro){
        return res.json({mensagem: erro.message});
    }
});
roteador.get('/:cpf', async (req,res) => {
    const cpf = req.params.cpf;
    try{
        const resultado = await chamada.chamadasPorCpf(cpf);
        return res.json(resultado);
    }catch (erro){
        return res.json({mensagem: erro.message});
    }
});
roteador.post('/adicionar', async (req,res) =>{
    try{
        const resultados = await chamada.adicionarChamada(req);    
        return res.end();    
    }catch (erro){
        return res.json({mensagem: erro.message});
    }
});

module.exports = roteador;