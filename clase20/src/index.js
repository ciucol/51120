const express = require('express')
const morgan = require('morgan')
const router = require('./router')
const mongoConnect = require('../db')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use(morgan('dev'))

router(app)
mongoConnect()

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
