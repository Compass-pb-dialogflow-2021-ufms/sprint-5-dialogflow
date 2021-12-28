const mongoose = require('mongoose')

    const nicknameSchema = new mongoose.Schema({
        name: {
            type: String,
        },
        userId: {
            type: String
        }
    })

module.exports = nicknameSchema