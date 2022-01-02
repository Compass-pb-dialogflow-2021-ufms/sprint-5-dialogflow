const mongoose = require('mongoose')


const ServiceCall = mongoose.model('ServiceCall', {
    id: Number,
    fullName: String,
    cpf: String,
    cellNumber: String,
    email: String,
    problemDescription: String,
    status: String
})


module.exports = ServiceCall