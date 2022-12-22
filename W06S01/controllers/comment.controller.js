const {Comment} = require('../models')

class CommentControllers {
    static Create (req, res) {
        const {photo_id, comment} = req.body
        const {id} = req.user
        Comment.create({photo_id : photo_id, comment : comment, user_id : id})
        .then((result) => {
            console.log("assss")
            return res.status(201).json(result)
        }).catch((err) => {
            console.log(err)
                return res.status(500).json({message : 'INTERNAL SERVER ERROR'})
        })
    }
}

module.exports = CommentControllers