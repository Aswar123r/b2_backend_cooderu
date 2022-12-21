const Router = require('express').Router()
const Product = require('../controllers/product.controller')

Router.post('/', Product.Create)
Router.put('/:id', Product.Update)
Router.delete('/:id', Product.Delete)
Router.get('/:id', Product.getById)
Router.get('/', Product.getAll)

module.exports = Router