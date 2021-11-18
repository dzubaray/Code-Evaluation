const axios = require('axios')
const { Book } = require('../models/book')

const baseUrl = process.env.EXTERNAL_EXCHANGE_URL
const queryParams = "len=100"

const requestBook = async (symbol) => {
    const pathParams = `book/${symbol}/P0`

    const { data } = await axios.get(`${baseUrl}/${pathParams}?${queryParams}`)
    //console.log(data)
    return data.map(book => new Book(book[0], book[1], book[2]))

}

module.exports = {
    requestBook
}
