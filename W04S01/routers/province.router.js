const router = require('express').Router()
const Province = require('../controllers/province.controller')

router.post('/', Province.create)
router.put('/:id', Province.update)
router.delete('/:id', Province.delete)
router.get('/:id', Province.getById)
router.get('/', Province.getAll)

module.exports = router