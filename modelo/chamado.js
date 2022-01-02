const mongoose = require('mongoose')

const chamadoSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    telefone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    cpf:{
        type: Number,
        required: true
    },
    descricao:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Chamado', chamadoSchema)