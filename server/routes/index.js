const router = require('express').Router()
const recordsRoute = require('./recordRoute')

router.get('/', async (req, res) => {
    res.status(200).json({msg: 'Greeting\'s, welcome to velvet room\'s'});
});

router.use('/records', recordsRoute)

module.exports = router
