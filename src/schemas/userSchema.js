const mongoose = require('mongoose')

    const userSchema = new mongoose.Schema({
        name: {
            type: String,
        },
        phone: {
            type: String
        },
        email: {
            type: String
        },
        cpf: {
            type: String
        },
        description: {
            type: String
        }
    })

module.exports = userSchema