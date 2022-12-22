const {Photo, Comment} = require('../models')
class PhtoControllers {
    static async Create (req, res) {
        const {id} = req.user 
        const {caption, url} = req.body
        Photo.create({caption : caption, url : url, user_id : id})
        .then((result) => {
            return res.status(201).json(result)
        }).catch((err) => {
            console.log(err)
                return res.status(500).json({message : 'INTERNAL SERVER ERROR'})
        })
    }
    static async Update (req, res) {
        const {caption, url} = req.body
        const {photoId} = req.params
        const {id} = req.user
        Photo.update({caption : caption, url : url},{where : {id : photoId, user_id : id}})
        .then(() => {
            return res.status(200).json("photo successfully has deleted")
        }).catch((err) => {
            console.log(err)
                return res.status(500).json({message : 'INTERNAL SERVER ERROR'})
        })
        
    }
    static async Delete (req, res) {
        const {photoId} = req.params
        const {id} = req.user
        Photo.destroy({where : {id : photoId, user_id : id}})
        .then(() => {
            return res.status(200).json({
                message : 'photo successfully has deleted'
            })
        }).catch((err) => {
            console.log(err)
                return res.status(500).json({message : 'INTERNAL SERVER ERROR'})
        })
    }

    static async byId (req, res) {
        const {photoId} =req.params
        Photo.findByPk(photoId, {
            include : [
                {
                    model : Comment
                }
            ]
        })
        .then((result) => {
            return res.status(200).json(result)
        }).catch((err) => {
            console.log(err)
                return res.status(500).json({message : 'INTERNAL SERVER ERROR'})
        })
    }

    static async All (req, res) {
        Photo.findAll()
        .then((result) => {
            return res.status(200).json(result)
        }).catch((err) => {
            console.log(err)
            return res.status(500).json({message : 'INTERNAL SERVER ERROR'})
        })
    }
}

module.exports = PhtoControllers