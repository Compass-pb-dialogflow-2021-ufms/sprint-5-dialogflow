const mongoose = require('../database/connection')

const ServiceRequestsSchema = new mongoose.Schema({
    userId: {
          type: String
        , unique: true
        , required: true
    },
    description: {
          type: String
        , required: true
    }
})

const ServiceRequests = mongoose.model('ServiceRequests', ServiceRequestsSchema)

module.exports = ServiceRequests