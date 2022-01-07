const express = require('express');
const app = express();
const controller = require('./controllers/controller.js')
const port = process.env.PORT || 3333;

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.get('/', function (req, res)  {
    res.send('Servidor online!');
});

app.post('/', controller);

app.listen(port, () => {
    console.log('Rodando em  http://localhost:3333');
});