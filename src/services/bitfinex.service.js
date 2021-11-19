const axios = require('axios')
const { Book } = require('../models/book')
const { Tricker } = require('../models/tricker')

const baseUrl = process.env.EXTERNAL_EXCHANGE_URL
const queryParams = "len=100"

const requestBook = async (symbol) => {
    const pathParams = `book/${symbol}/P0`

    const { data } = await axios.get(`${baseUrl}/${pathParams}?${queryParams}`)
    return data.map(book => new Book(book[0], book[1], book[2]))
}

const requestTricker = async(symbol) => {
    const pathParams = `ticker/${symbol}`

    const { data } = await axios.get(`${baseUrl}/${pathParams}`)
    return new Tricker(
        data[0],
        data[1],
        data[2],
        data[3],
        data[4],
        data[5],
        data[6],
        data[7],
        data[8],
        data[9]
    )
}

module.exports = {
    requestBook,
    requestTricker
}
