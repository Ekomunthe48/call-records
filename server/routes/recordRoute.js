const RecordController = require('../controllers/phoneRecordsController')

const router = require('express').Router()

router.get('/', RecordController.findAll)
router.get('/:id', RecordController.findOne)
router.post('/add', RecordController.insertOne)

module.exports = router