const {verify} = require('../Helpers/jwt.helper')
const {User} = require('../models')
async function authenticationMiddleware (req, res, next){
   try {
     const authHeader = req.get("auth")
    if(!authHeader) return res.status(401).json({
      message : "You are not authenticated"
    })
    const {id, email } = verify(authHeader)
    const Users = await User.findOne({ where: { id }, attributes : ['id', 'email']})
    if(!Users) return res.status(403).json({
      message : "Token is not valid!"
    })
    req.user = {id}
    next()
   } catch (err) {
    return res.status(500).json(`${err.message}. Please try again`)
   }
}

module.exports = authenticationMiddleware