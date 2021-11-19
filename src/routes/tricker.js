const { Router } = require('express')
const { param } = require('express-validator')
const { validateFields } = require('../middlewares/validateFields')
const { getTrickers } = require('../controllers/tricker')

const router = Router()

router.get('/:tradingPair/:tradingType/:orderSize',
    [
        param('tradingPair')
            .exists()
            .withMessage('The trading pair is Requiered')
            .isString()
            .withMessage('The trading pair must be a String')
            .isIn(['BTC-USD', 'ETH-USD'])
            .withMessage('The trading pair must be either \'BTC-USD\' or \'ETH-USD\''),
        param('tradingType')
            .exists()
            .withMessage('The trading type is Requiered')
            .isString()
            .withMessage('The trading type must be a String')
            .isIn(['trading', 'funding'])
            .withMessage('The trading type must be either \'trading\' or \'funding\''),
        param('orderSize')
            .exists()
            .withMessage('The order size is Requiered')
            .isString()
            .withMessage('The order size must be a String')
            .isIn(['low', 'high'])
            .withMessage('The order size must be either \'low\' or \'high\''),
        validateFields
    ],
    getTrickers)

module.exports = router