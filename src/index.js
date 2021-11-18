const express = require('express')
const app = express()

require('dotenv').config()
const port = process.env.PORT || 3000

app.use('/v1/api', require('./routes/book'))

app.listen(port, () => {
  console.log(`Example app listening at port: ${port}`)
})

module.exports = app
