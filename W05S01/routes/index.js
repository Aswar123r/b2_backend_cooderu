const Router = require('express').Router()
const User = require('./user.route')
const Product = require('./product.route')

Router.use('/users', User)
Router.use('/products', Product)

module.exports = Router