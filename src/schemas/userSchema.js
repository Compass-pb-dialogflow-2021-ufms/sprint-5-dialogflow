const mongoose = require('mongoose')

    const userSchema = new mongoose.Schema({
        name: {
            type: String,
        },
        userId: {
            type: String
        }
    })

module.exports = userSchema