const {Product, User} = require('../models')

class UserControllers {
    static async Create (req, res) {
        const {name, username, email, password} = req.body
        try {
            const createUser = await User.create({name : name, username : username, email : email, password : password})
            if(createUser) return res.status(200).json({
                message : 'User successfully created'
            })
        } catch (err) {
            console.log(err)
            res.status(500).json({
                message : 'INTERNAL SERVER ERROR'
            })
        }
    }

    static async Update (req, res) {
        const {id} = req.params
        const {name, username, email, password} = req.body
        try {
            const updateUser = await User.update({name : name, username : username, email : email, password : password},{where : {id : id}})
            if(updateUser) return res.status(200).json({
                message : 'User successfully updated'
            })
        } catch (err) {
            console.log(err)
            res.status(500).json({
                message : 'INTERNAL SERVER ERROR'
            })
        }
    }

    static async Delete (req, res) {
        const {id} = req.params
        try {
            const deleteUser = await User.destroy({where : {id : id}})
            if(deleteUser) return res.status(200).json({
                message : 'User successfully deleted'
            })
        } catch (err) {
            console.log(err)
            res.status(500).json({
                message : 'INTERNAL SERVER ERROR'
            })
        }
    }

    static async getAll (req, res) {
        try {
            const Users = await User.findAll({
                include: [
                    {
                        model: Product
                    }
                ]
            })
            if(Users) return res.status(200).json({
                data : Users
            })
        } catch (err) {
            console.log(err)
            res.status(500).json({
                message : 'INTERNAL SERVER ERROR'
            })
        }
    }

    static async getById (req, res) {
        const {id} = req.params
        try {
            const Users = await User.findByPk(id, {
                include: [
                    {
                        model: Product
                    }
                ]
            })
            if(User) return res.status(200).json({
                data : Users
            })
            return res.status(404).json({
                message : "NOT FOUND"
            })

        } catch (err) {
            console.log(err)
            res.status(500).json({
                message : 'INTERNAL SERVER ERROR'
            })
        }
    }
}

module.exports = UserControllers