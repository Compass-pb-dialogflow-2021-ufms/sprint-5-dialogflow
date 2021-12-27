const roteador = require('express').Router();
const axios = require('axios');
const buscaIdCidade = require('../acaoApiExterna');

roteador.get('/previsao/', async (req, res) => {
    const cidade = req.query.cidade;
    const estado = req.query.estado;
    try {
        const idCidade = await buscaIdCidade(estado, cidade);

        if (idCidade.length > 8) {
            return res.json(idCidade); 
        } else {
            const {data} = await axios(`https://apiprevmet3.inmet.gov.br/previsao/${idCidade}/`);
            return res.json(data[idCidade]);
        }
    } catch (erro) {
        console.log("erro");
        return res.status(erro.response.status).json({mensagem: erro.message});
    }

});



module.exports = roteador;