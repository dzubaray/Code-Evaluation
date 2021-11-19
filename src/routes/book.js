const { Router } = require('express')
const { param } = require('express-validator')
const { validateFields } = require('../middlewares/validateFields')
const { getBooks } = require('../controllers/book')

const router = Router()

router.get('/book/:tradingPair',
            [
                param('tradingPair')
                    .exists()
                    .withMessage('The trading pair is Requiered')
                    .isString()
                    .withMessage('The trading pair must be a String')
                    .isIn(['BTC-USD', 'ETH-USD'])
                    .withMessage('The trading pair must be either \'BTC-USD\' or \'ETH-USD\''),
                validateFields
            ],
            getBooks)

module.exports = router
