const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chamadaSchema = new Schema({
    nome: {type: String, required: true,},
    telefone: {type: String, required: true},
    email: {type: String, required: true},
    cpf: {type: String, required: true},
    descricao: {type: String, required: true},
    status:{type: String, required: true}
});

const usuario = mongoose.model('chamada', chamadaSchema);

module.exports = usuario;