const User = require('../models/userModel');

async function saveUserMessageId(userId) {
    newUser = {
        userMessageId: userId
    }

    const user = await User.findOne(newUser)

    if (user === null) {
        await User.create(newUser)
        return false;
    }

    return true;
}

async function removeUserMesseId(userId) {
    newUser = {
        userMessageId: userId
    }

    const user = await User.findOne(newUser)

    if (user !== null) {
        await User.deleteOne({
            userMessageId: userId
        })
    }
}

module.exports = {
    saveUserMessageId,
    removeUserMesseId
}