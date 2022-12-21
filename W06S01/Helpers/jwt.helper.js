const jwt = require('jsonwebtoken')

function sign(payload) {
    return jwt.sign(payload, process.env.secretJWT)
}
function verify(token) {
    return jwt.verify(token, process.env.secretJWT)
}

module.exports = {
    sign,
    verify
}