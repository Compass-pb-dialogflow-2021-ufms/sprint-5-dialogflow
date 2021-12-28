require('dotenv').config()
const express = require('express')
const router = require('./routs/router')
const mongoose = require('mongoose')


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/assistencia', router)


const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const url = process.env.MONGODB_URI || `mongodb+srv://${DB_USER}:${DB_PASSWORD}@assistenciatecnica.gf9jz.mongodb.net/mrRobotDataBase?retryWrites=true&w=majority`
const port = process.env.PORT || 3000


mongoose.connect(url)
.then(() => {
    console.log('Conectado ao banco de dados')
    app.listen(port, () => {console.log(`O servidor rodando na porta ${port}`)})
})
.catch((erro) => {
    console.log(erro)
})