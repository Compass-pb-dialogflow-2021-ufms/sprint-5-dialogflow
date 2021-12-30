const ServiceRequests = require('../models/ServiceRequests')

const createServiceRequest = (userId, description) => {
    ServiceRequests.create({
          userId: userId
        , description: description
    })
}

const listUserServiceRequests = (userId) => {
    return ServiceRequests.find({
        userId: userId
    })
}

module.exports = {
      createServiceRequest
    , listUserServiceRequests
}