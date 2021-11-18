const express = require('express')
const app = express()
const port = 8000

app.use('/v1/api', require('./routes/book'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
