const moongose = require('mongoose');

const userSchema = new moongose.Schema({
    telegramId: {
        type: Number,
        required: true

    }
})

module.exports = mongoose.model('userModel', userSchema)