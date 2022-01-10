const Users = require('../models/DAO/Users')

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

const getUser = (userId) => {
    return Users.findOne({
        userId: userId
    })
}

const setRiskGroups = (userId, value) => {
    return Users.findOneAndUpdate(
        {
            userId: userId
        },
        {
            riskGroups: value
        }
    )
}

const setFever = (userId, value) => {
    return Users.findOneAndUpdate(
        {
            userId: userId
        },
        {
            fever: value
        }
    )
}

const setMildSymptoms = (userId, value) => {
    return Users.findOneAndUpdate(
        {
            userId: userId
        },
        {
            mildSymptoms: value
        }
    )
}

const setSevereSymptoms = (userId, value) => {
    return Users.findOneAndUpdate(
        {
            userId: userId
        },
        {
            severeSymptoms: value
        }
    )
}

module.exports = {
      userExists
    , createUser
    , getUser
    , setRiskGroups
    , setFever
    , setMildSymptoms
    , setSevereSymptoms
}