const express = require('express')
const router = require('./router')

const app = express()

app.use(express.json())

router(app)

app.listen(3001, () => {
  console.log(3001)
})
