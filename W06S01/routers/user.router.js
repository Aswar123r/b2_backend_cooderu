const Router = require('express').Router()
const User = require('../controllers/user.controller')

Router.post('/register', User.Register)
Router.post('/login', User.Login)

module.exports = Router