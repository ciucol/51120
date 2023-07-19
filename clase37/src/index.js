const express = require('express')
const router = require('./router')

const app = express()

router(app)

app.listen(3000, () => {
  console.log(3000)
})
