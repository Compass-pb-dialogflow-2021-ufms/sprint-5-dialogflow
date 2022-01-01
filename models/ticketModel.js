const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Campo Obrigatório']
    },
    cpf: {
        type: String,
        required: [true, 'Campo Obrigatório']
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    problemDecription: {
        type: String,
    }
});

const Ticket = mongoose.model('chamadas', ticketSchema);

module.exports = Ticket;