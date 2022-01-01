require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const controller = require('./controllers/controller')

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

mongoose.connection.on('error', (erro) => {
    console.log(`Erro de banco de dados ${erro}`);
});

app.get('/', function (req, res) {
    res.send('Servidor rodando');
});

app.post('/', controller);

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@nodejscluster.ygy5j.mongodb.net/suporteDB?retryWrites=true&w=majority`
).then(() => {
    console.log("Conectado ao banco contatoDB")
    app.listen(process.env.PORT || 3000, () => {
        console.log('Rodando em  http://localhost:3000/');
    })
})