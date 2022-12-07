const router = require('express').Router()
const Regancy = require('../controllers/regancy.controller')

router.post('/', Regancy.create)
router.put('/:id', Regancy.update)
router.delete('/:id', Regancy.delete)
router.get('/:id', Regancy.getById)
router.get('/', Regancy.getAll)

module.exports = router