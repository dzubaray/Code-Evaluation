const { Router } = require('express')
const { param } = require('express-validator')
const { validateFields } = require('../middlewares/validateFields')
const { getBooks } = require('../controllers/book')

const router = Router()

router.get('/book/:symbol',
            [
                param('symbol')
                    .exists()
                    .withMessage('The trading pair is Requiered')
                    .isString()
                    .withMessage('The trading pair must be a String')
                    .isIn(['tBTCUSD', 'tETHUSD'])
                    .withMessage('The trading pair must be either \'tBTCUSD\' or \'tETHUSD\''),
                validateFields
            ],
            getBooks)

module.exports = router
