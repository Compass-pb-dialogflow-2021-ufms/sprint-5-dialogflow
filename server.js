const express = require('express');
const app = express();
const controller = require('./controllers/controller')

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.send('Servidor rodando');
});

app.post('/', controller);

app.listen(process.env.PORT || 3000, () => {
    console.log('Rodando em  http://localhost:3000');
});