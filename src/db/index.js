const config = require('config')
const mongoose = require('mongoose')

const conn = mongoose.createConnection(config.get( 'mongo.con' ))

//Model Name, Schema Name, Collection
const User = conn.model('User', require("../schemas/userSchema"))

module.exports = {
    User
}