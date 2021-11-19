const express = require('express')
const { requestBook } = require('../services/bitfinex.service')

const tradingPair = {
    'BTC-USD': () => 'tBTCUSD',
    'ETH-USD': () => 'tETHUSD'
}

const getBooks = async (req, res = express.response) => {
    const symbol = tradingPair[req.params.tradingPair]
    try {
        const data = await requestBook(symbol())
        res.json({
            ok: true,
            data
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            ok: false,
            error
        })
    }
}

module.exports = {
    getBooks
}
