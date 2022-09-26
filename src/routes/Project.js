
const express = require('express')
const router = express.Router()
const getAllUsers = require('../controllers/Project.js')


router.get('/all', getAllUsers)

module.exports = router 
