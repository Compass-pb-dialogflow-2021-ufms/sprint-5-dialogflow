const express = require('express')
const router = express.Router()
const controller = require('../controller')


router.post('/', controller.main)
//router.get('/', controller.log)
module.exports = router
