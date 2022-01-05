const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userMessageId: {
        type: String,
    }
});

const User = mongoose.model('usuarios', userSchema);

module.exports = User;