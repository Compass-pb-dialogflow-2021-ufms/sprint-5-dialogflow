const roteador = require('express').Router();
const resposta = require('../controlador');
roteador.post('/', async (req, res) => {
  const tag = req.body.queryResult.intent.displayName;
  res.send( await resposta(tag,req));
})


module.exports = roteador;