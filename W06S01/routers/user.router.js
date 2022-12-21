const Router = require('express').Router()
const User = require('../controllers/user.controller')

Router.post('/', User.Register)
Router.post('/', User.Login)

module.exports = Router