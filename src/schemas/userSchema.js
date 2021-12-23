const mongoose = require('mongoose')

    const userSchema = new mongoose.Schema({
        name: {
            type: String,
        },
        cpf: {
            type: String,
        }
    })

module.exports = userSchema