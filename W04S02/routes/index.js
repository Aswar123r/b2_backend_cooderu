const router = require('express').Router()
const province = require('./province.router')
const regancy = require('./regancy.router')

router.use('/province', province)
router.use('/regancy', regancy)

module.exports = router