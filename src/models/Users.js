const mongoose = require('../database/connection')

const UsersSchema = new mongoose.Schema({
    userId: {
          type: String
        , unique: true
        , required: true
    },
    name: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    cpf: {
          type: String
        , unique: true
    }
})

const Users = mongoose.model('Users', UsersSchema)

module.exports = Users