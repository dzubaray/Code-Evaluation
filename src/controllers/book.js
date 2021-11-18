const express = require('express')
const { requestBook } = require('../services/book')

const getBooks = async (req, res = express.response) => {
    const symbol = req.params.symbol
    try {
        const data = await requestBook(symbol)
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
