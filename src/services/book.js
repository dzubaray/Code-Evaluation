const axios = require('axios')

const baseUrl = "https://api-pub.bitfinex.com/v2/";
const pathParams = "book/tBTCUSD/P0"
const queryParams = "len=100"

const requestBook = async () => {
    try {
        const response = await axios.get(`${baseUrl}/${pathParams}?${queryParams}`)
        console.log(response.data)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports = {
    requestBook
}
