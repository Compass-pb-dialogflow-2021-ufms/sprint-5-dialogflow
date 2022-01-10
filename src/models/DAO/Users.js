const mongoose = require('../../database/connection')

const UsersSchema = new mongoose.Schema({
    userId: {
          type: String
        , unique: true
        , required: true
    },
    riskGroups: {
        type: Boolean
    },
    fever: {
        type: Boolean
    },
    mildSymptoms: {
        type: String
    },
    severeSymptoms: {
        type: Boolean
    }
})

const Users = mongoose.model('Users', UsersSchema)

module.exports = Users