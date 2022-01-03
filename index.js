const express = require('express');
const app = express();
const controller = require('./controllers/controller.js')

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.get('/', function (req, res)  {
    res.send('Servidor funcionando!');
});

app.post('/', controller);

app.listen(process.env.PORT || 3333, () => {
    console.log('Rodando em  http://localhost:3333');
});