const mongoose = require('mongoose')

    const userSchema = new mongoose.Schema({
        nickname: {
            type: String,
        },
        userPlatformId: {
            type: String
        }
    })

module.exports = userSchema