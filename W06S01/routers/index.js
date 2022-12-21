const Router = require('express').Router()
const User = require('./user.router')
const Photo = require('./photo.router')
const Comment = require('./comment.router')
const Auth = require('../middlewares/auth')
Router.use('/users', User)
Router.use('/photos', Auth, Photo)
Router.use('/comments', Auth, Comment)

module.exports = Router