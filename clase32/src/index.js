const express = require('express')
const router = require('./router')
const compression = require('express-compression')
const errorHandler = require('./middlewares/errors')

const app = express()

app.use(express.json())
app.use(
  compression({
    brotli: { enabled: true, zlib: {} },
  })
)

router(app)

app.use(errorHandler)

app.listen(3000, () => {
  console.log(3000)
})
