const mongoose = require('mongoose')

    const platformSchema = new mongoose.Schema({
        userId: {
            type: String,
        },
        session: {
            type: String,
        }
    })

module.exports = platformSchema