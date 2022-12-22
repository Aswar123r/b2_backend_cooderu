const {hash, compare} = require('../Helpers/bcrypt.helper')
const {sign, verify} = require('../Helpers/jwt.helper')
const {User} = require('../models')


class UserControllers {
    static async Register(req, res) {
        let {full_name, email, username, password} = req.body
            password = hash(password)
            User.create({full_name : full_name, email : email, username : username, password : password})
            .then((result) => {
                return res.status(201).json(result)
            }).catch((err) => {
                console.log(err)
                return res.status(500).json({message : 'INTERNAL SERVER ERROR'})
            })
    }

     static async Login(req, res) {
        const {email, password} = req.body
        User.findOne({where : {email : email}})
        .then(async (result) => {
            console.log(result)
            if(!result) return res.status(400).json({
                message : 'User Not Found'
            })
            const match = compare(result.password, password)
            if(match) return res.status(400).json({
                message : 'User and password is not match'
            })
            const token = sign({id : result.id, email : result.email})
            return res.status(200).json({
                id : result.id,
                username : result.username,
                email : result.email,
                full_name : result.full_name,
                token : token
            })
        }).catch((err) => {
                console.log(err)
                return res.status(500).json({message : 'INTERNAL SERVER ERROR'})
            })
    }

     static async Update(req, res) {
        
    }

     static async Delete(req, res) {
        
    }
}

module.exports = UserControllers