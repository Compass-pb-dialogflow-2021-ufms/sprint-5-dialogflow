const config = require('config')
const mongoose = require('mongoose')

const conn = mongoose.createConnection(config.get( 'mongo.con' ))

//Model Name, Schema Name, Collection
const User = conn.model('User', require("../schemas/userSchema"))
const Nickname = conn.model('Nickname', require("../schemas/nicknameSchema"))
const Platform = conn.model('Platform', require("../schemas/platformSchema"))

module.exports = {
    Nickname,
    Platform,
    User
}