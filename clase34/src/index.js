const express = require('express')
const addLogger = require('./middlewares/logger.middleware')
const router = require('./router')

const app = express()

app.use(addLogger)

router(app)

app.listen(3000, () => {
  console.log(3000)
})
