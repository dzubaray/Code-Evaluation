const { Router } = require('express')
const { getBooks } = require('../controllers/book')

const router = Router()

router.get('/book/:symbol', getBooks)

module.exports = router
