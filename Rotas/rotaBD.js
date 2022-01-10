const roteador = require('express').Router();
const acoes = require('../BancoDeDados/acoesBD');

roteador.get('/:id', async (req,res) => {
    try{
        const id = req.params.id;
        const resultado = await acoes.buscaUsuario(id);
        return res.json(resultado);
    }catch (erro){
        return res.send(
            JSON.stringify({mensagem :erro.message})
        )
    }
});
roteador.post('/usuario/', async (req,res) =>{
    try{
        await acoes.adicionarUsuario(req);    
        return res.status(200).end();   
    }catch (erro){
        return res.send(
            JSON.stringify({mensagem :erro.message})
        )
    }
});
roteador.put('/diagnostico/:session', async (req,res) => {
    try{
        const session = req.params.session;
        const resultado = await acoes.buscarSession(session);
        return res.status(200).end();
    }catch (erro){
        return res.send(
            JSON.stringify({mensagem :erro.message})
        )
    }
});
roteador.post('/diagnostico', async (req,res) =>{
    try{
        await acoes.adicionarDiagnostico(req);    
        return res.status(200).end();   
    }catch (erro){
        return res.send(
            JSON.stringify({mensagem :erro.message})
        )
    }
});
roteador.get('/diagnostico/dados/:session', async (req,res) =>{
    try{
        const session = req.params.session;
        const resultado = await acoes.buscarDadosDiagnostico(session);    
        return res.status(200).json(resultado);   
    }catch (erro){
        return res.send(
            JSON.stringify({mensagem :erro.message})
        )
    }
});
roteador.put('/atualizar/:session', async (req,res) =>{
    try{
        const session = req.params.session;
        const dados = req.body;
        await acoes.atualizar(session,dados);    
        return res.status(200).end();   
    }catch (erro){
        return res.send(
            JSON.stringify({mensagem :erro.message})
        )
    }
});


module.exports = roteador;