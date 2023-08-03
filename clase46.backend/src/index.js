const express = require('express')
const cors = require('cors')
const router = require('./router')

const port = 3000
const app = express()

app.use(cors())

router(app)

app.listen(port, () => {
  console.log(port)
})
