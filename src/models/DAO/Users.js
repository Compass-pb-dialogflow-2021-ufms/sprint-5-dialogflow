const mongoose = require('../../database/connection')

const UsersSchema = new mongoose.Schema({
    userId: {
        type: String
        , unique: true
        , required: true
    }
})

const Users = mongoose.model('Users', UsersSchema)

module.exports = Users