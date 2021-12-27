const express = require('express');
const app = express();
const cors = require('cors');
const roteadorApiExterna = require('./Rotas/rotaApiExterna');
const roteadorApiInterna = require('./Rotas/rotaApiInterna');
const porta = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(porta, () => console.log("Servidor rodando"));

app.use('/api/interna', roteadorApiInterna);
app.use('/api/externa', roteadorApiExterna);