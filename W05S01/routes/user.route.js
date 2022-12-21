const Router = require('express').Router()
const User = require('../controllers/user.controller')

Router.post('/', User.Create)
Router.put('/:id', User.Update)
Router.delete('/:id', User.Delete)
Router.get('/:id', User.getById)
Router.get('/', User.getAll)

module.exports = Router