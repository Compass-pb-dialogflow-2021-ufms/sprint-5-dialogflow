const roteador = require('express').Router();
const acoes = require('../BancoDeDados/acoesBD');

roteador.get('/:id', async (req,res) => {
    try{
        const id = req.params.id;
        const resultado = await acoes.buscaUsuario(id);
        return res.json(resultado);
    }catch (erro){
        return res.send(erro);
    }
});
roteador.post('/usuario/', async (req,res) =>{
    try{
        await acoes.adicionarUsuario(req);    
        return res.status(200);   
    }catch (erro){
        return res.send(erro);
    }
});
roteador.put('/diagnostico/:session', async (req,res) => {
    try{
        const session = req.params.session;
        const resultado = await acoes.buscarSession(session);
        return res.json(resultado);
    }catch (erro){
        return res.send(
            JSON.stringify(erro.message)
        )
    }
});
roteador.post('/diagnostico', async (req,res) =>{
    try{
        await acoes.adicionarDiagnostico(req);    
        return res.status(200);   
    }catch (erro){
        return res.send(
            JSON.stringify(erro.message)
        )
        //return res.send(erro);
    }
});
roteador.get('/diagnostico/dados/:session', async (req,res) =>{
    try{
        const session = req.params.session;
        const resultado = await acoes.buscarDadosDiagnostico(session);    
        return res.status(200).json(resultado);   
    }catch (erro){
        return res.send(
            JSON.stringify(erro.message)
        )
    }
});
roteador.put('/atualizar/:session', async (req,res) =>{
    try{
        const session = req.params.session;
        console.log("req.body");
        console.log(req.body);
        const dados = req.body;
        await acoes.atualizar(session,dados);    
        return res.status(200).end();   
    }catch (erro){
        return res.send(
            JSON.stringify(erro.message)
        )
    }
});


module.exports = roteador;