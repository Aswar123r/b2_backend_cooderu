const Router = require('express').Router()
const Comment = require('../controllers/comment.controller')

Router.post('/', Comment.Create)
//Router.get('/commentId', Comment.getAllCommentByPhoto)

module.exports = Router