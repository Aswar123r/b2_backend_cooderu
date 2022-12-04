const Router = require('express').Router()
const Province = require('../controllers/provinceController')

Router.post('/', Province.Create)
Router.put('/:id', Province.Update)
Router.delete('/:id', Province.Delete)
Router.get('/', Province.getAll)
Router.get('/:id', Province.getById)

module.exports = Router