const express = require('express')
const { requestTricker } = require('../services/bitfinex.service')

const tradingPair = {
    'BTC-USD': () => 'tBTCUSD',
    'ETH-USD': () => 'tETHUSD'
}

const price = {
    'trading': (orderSize) => orderSize === 'low' ? 'ask' : 'askSize',
    'funding': (orderSize) => orderSize === 'low' ? 'bid' : 'bidSize'
}

const getTrickers = async (req, res = express.response) => {
    const symbol = tradingPair[req.params.tradingPair]
    const tradingType = req.params.tradingType
    const orderSize = req.params.orderSize

    try {
        const data = await requestTricker(symbol())
        let price = getPrice(data, tradingType, orderSize)

        res.json({
            ok: true,
            tradingType,
            orderSize,
            price
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            ok: false,
            error
        })
    }
}

const getPrice = (data, tradingType, orderSize) => {
    const value = price[tradingType](orderSize)
    return data[value]
}

module.exports = {
    getTrickers
}
