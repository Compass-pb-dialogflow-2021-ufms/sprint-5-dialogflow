require('dotenv').config()
const mongoose = require('mongoose')

const DB_HOST = process.env.DB_HOST
mongoose.connect(DB_HOST)
mongoose.Promise = global.Promise

module.exports = mongoose