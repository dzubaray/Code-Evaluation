const express = require('express')
const { requestBook } = require('../services/book')

const getBooks = async (req, res = express.response) => {
    const response = await requestBook()
    res.json({
        ok: response
    })
}

module.exports = {
    getBooks
}
