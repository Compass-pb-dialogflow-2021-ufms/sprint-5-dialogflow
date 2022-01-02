const express = require('express');
const app = express();
const roteadorApiInterna = require('./Rotas/rotaApiInterna');
const roteadorBD = require('./Rotas/rotaBD');
const conexao = require('./BancoDeDados/conexao');
const porta = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(porta, () => console.log("Servidor rodando"));

app.use('/api/interna', roteadorApiInterna);
app.use('/bd/', roteadorBD);