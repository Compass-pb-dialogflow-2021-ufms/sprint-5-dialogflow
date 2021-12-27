const express = require('express')
const router = require('./routs/router')


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/assistencia', router)


const port = process.env.PORT || 3000
app.listen(port, () => {console.log(`O servidor rodando na porta ${port}`)})