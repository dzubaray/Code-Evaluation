const express = require('express')

const getBooks = async (req, res) => {
    res.json({
        ok: true
    })
}

module.exports = {
    getBooks
}
