const {Product, User} = require('../models')
class ProductControllers {
    static async Create (req, res) {
        const {name, price, quantity, user_id} = req.body
        try {
            const createProduct = await Product.create({name : name, price : price, quantity : quantity, user_id : user_id})
            if(createProduct) return res.status(200).json({
                message : 'Product successfully created'
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
        const {name, price, quantity, user_id} = req.body
        try {
            const updateProduct = await Product.update({name : name, price : price, quantity : quantity, user_id : user_id},{where : {id : id}})
            if(updateProduct) return res.status(200).json({
                message : 'Product successfully updated'
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
            const deleteProduct = await Product.destroy({where : {id : id}})
            if(deleteProduct) return res.status(200).json({
                message : 'Product successfully deleted'
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
            const Products = await Product.findAll({
                include: [
                    {
                        model: User
                    }
                ]
            })
            if(Products) return res.status(200).json({
                data : Products
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
            const Products = await Product.findByPk(id, {
                include: [
                    {
                        model: User
                    }
                ]
            })
            if(Products) return res.status(200).json({
                data : Products
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

module.exports = ProductControllers