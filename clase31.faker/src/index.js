const express = require('express')
const router = require('./router')

const app = express()
const port = process.env.PORT

app.use(express.json())

router(app)

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
