const mongoose = require('mongoose')


const TelegramUser = mongoose.model('TelegramUser', {
    id: String
})


module.exports = TelegramUser