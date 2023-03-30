const express = require('express')
const mongoose = require('mongoose')
const dbConnect = require('../db')
const router = require('./router')

const port = 3001

const app = express()

app.use(express.json())

router(app)

dbConnect()

app.listen(port, () => {
  console.log(`server running at port ${port}`)
})
