const Router = require('express').Router()
const Photo = require('../controllers/photo.controller')

Router.post('/', Photo.Create)
Router.put('/:photoId', Photo.Update)
Router.delete('/:photoId', Photo.Delete)
Router.get('/:photoId', Photo.byId)
Router.get('/', Photo.All)

module.exports = Router