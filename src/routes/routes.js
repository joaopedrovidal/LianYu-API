const connection =  require ('../database/connection')
const express = require('express')
const router = express.Router()
const UsuarioController = require('../controllers/UsuarioController')

router.post('/novoUsuario', UsuarioController.newUser)

module.exports = router