const express = require('express')
const morgan = require('morgan')
const mongoConnect = require('../db')
const router = require('./router')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

mongoConnect()
router(app)

app.listen(3000, () => {
  console.log(`Server running at port 3000`)
})
