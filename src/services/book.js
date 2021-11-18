const axios = require('axios')

const baseUrl = process.env.EXTERNAL_EXCHANGE_URL
const queryParams = "len=100"

const requestBook = async (symbol) => {
    const pathParams = `book/${symbol}/P0`
    try {
        const { data } = await axios.get(`${baseUrl}/${pathParams}?${queryParams}`)
        console.log(data)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports = {
    requestBook
}
