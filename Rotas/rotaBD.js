const router = require('express').Router();
const usuario = require('../BancoDeDados/acoesBD');

router.get('/:id', async (req,res) => {
    try{
        const id = req.params.id;
        const resultado = await usuario.buscaUsuario(id);
        return res.json(resultado);;
    }catch (erro){
        return res.send(erro);
    }
});
router.post('/adicionar', async (req,res) =>{
    try{
        await usuario.adicionarUsuario(req);    
        return res.status(200);   
    }catch (erro){
        return res.send(erro);
    }
});

module.exports = router;