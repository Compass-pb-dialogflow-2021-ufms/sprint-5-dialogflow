const express = require('express')
const router = require('./routs/roter')


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/previsao7dias', router)


const port = process.env.PORT || 3000
app.listen(port, ()=> {console.log(`Servidor rodando na porta ${port}`)})