const express = require('express')
const { requestBook } = require('../services/book')

const getBooks = async (req, res = express.response) => {
    const symbol = req.params.symbol
    const response = await requestBook(symbol)
    res.json({
        ok: response
    })
}

module.exports = {
    getBooks
}
