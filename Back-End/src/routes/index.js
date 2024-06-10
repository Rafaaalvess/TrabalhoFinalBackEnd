const express = require('express')
const router = express.Router()
const userController = require('../controller/userControler')

router.get('/user', userController.getAll)
router.post('/cadastro', userController.createUser)
router.post('/login', userController.validateLogin)

module.exports = router