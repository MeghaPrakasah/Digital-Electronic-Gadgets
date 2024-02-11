
const express = require('express')
const router = express.Router()
const {createUser} = require('../Controller/userContrl')


router.post("/register",createUser);

module.exports = router ;