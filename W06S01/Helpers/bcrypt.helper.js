const bcrypt = require('bcrypt')
function hash(payload) {
    return bcrypt.hashSync(payload, 10)
}

function compare(plainText, hashed) {
    return bcrypt.compareSync(plainText, hashed)
}

module.exports = {
    hash, 
    compare
}