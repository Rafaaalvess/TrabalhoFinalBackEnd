const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const animalController = require('../controller/animalController')
const contactController = require('../controller/contactController')

router.get('/user', userController.getAll)
router.post('/cadastro', userController.createUser)
router.post('/login', userController.validateLogin)
router.get('/animal',animalController.getAll )
router.get('/animal/:nome',animalController.getByNome)
router.post('/cadastroanimal',animalController.createAnimal)
router.get('/contato',contactController.getAll )
router.post('/criarcontato',contactController.createContact)

module.exports = router