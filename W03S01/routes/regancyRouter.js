const Router = require('express').Router()
const Regency = require('../controllers/regencyController')

Router.post('/', Regency.Create)
Router.put('/:id', Regency.Update)
Router.delete('/:id', Regency.Delete)
Router.get('/', Regency.getAll)
Router.get('/:id', Regency.getById)

module.exports = Router