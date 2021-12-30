const Users = require('../models/Users')

const userExists = (userId) => {
    return Users.find({
        userId: userId
    }).then(result => {
        if (result.toString() !== '') return true
        else return false
    })
}

const userDataCompleted = (User) => {
    if (User.name && User.phone && User.email && User.cpf) {
        return true
    } else {
        return false
    }
}

const createUser = (userId) => {
    Users.create({
        userId: userId
    })
}

const findUser = (userId) => {
    return Users.findOne({
        userId: userId
    })
}

const setUserData = (userId, name, phone, email, cpf) => {
    Users.findOneAndUpdate(
        {
            userId: userId
        },
        {
              name: name
            , phone: phone
            , email: email
            , cpf: cpf
        }
    ).catch(e => {
        console.log(e)
    })
}

module.exports = {
      userExists
    , userDataCompleted
    , createUser
    , findUser
    , setUserData
}