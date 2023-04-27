const express = require('express')
const mongoConnect = require('../db')
const router = require('./router')
const cookieParser = require('cookie-parser')
const initializePassport = require('./config/passport.config')
const passport = require('passport')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use(cookieParser())
initializePassport()
app.use(passport.initialize())

mongoConnect()

router(app)

app.listen(3000, () => {
  console.log(3000)
})
