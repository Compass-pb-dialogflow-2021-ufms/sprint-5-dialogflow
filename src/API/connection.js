require('dotenv').config()
const axios = require('axios')

const API_BASE_URL = process.env.API_BASE_URL
const API_TOKEN = process.env.API_TOKEN
const API = axios.create({
    baseURL: API_BASE_URL

})

module.exports = {
      API
    , API_TOKEN
}