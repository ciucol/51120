const express = require('express')
const router = require('./router')
const mongoConnect = require('../db')

const app = express()

app.use(express.json())

mongoConnect()

router(app)

module.exports = app
