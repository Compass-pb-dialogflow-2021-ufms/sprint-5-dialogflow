const Users = require('../models/Users')

const userExists = (userId) => {
    return Users.find({
        userId: userId
    }).then(result => {
        if (result != '') return true
        else return false
    })
}

const createUser = (userId) => {
    Users.create({
        userId: userId
    })
}

module.exports = {
      userExists
    , createUser
}