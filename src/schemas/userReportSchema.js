const mongoose = require('mongoose')

    const userReportSchema = new mongoose.Schema({
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

module.exports = userReportSchema