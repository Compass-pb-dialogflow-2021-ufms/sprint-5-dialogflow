require('dotenv').config()
const express = require('express')
const router = require('./routs/router')
const mongoose = require('mongoose')


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/coronavirus', router)


const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const url = process.env.MONGODB_URL || `mongodb+srv://${DB_USER}:${DB_PASSWORD}@sprint5-task3.hox0x.mongodb.net/coronaBotDataBase?retryWrites=true&w=majority`
const port = process.env.PORT || 3000


mongoose.connect(url)
.then(() => {
    console.log('Conectado ao banco de dados!')
    app.listen(port, () => {console.log(`Servidor rodando na porta ${port}`)})
})
.catch((error) => {
    console.log(error)
})