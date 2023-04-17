const express = require('express')
const handlebars = require('express-handlebars')
const session = require('express-session')
const router = require('./router')
const mongoConnect = require('../db')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use(
  session({
    secret: 'coder51120',
    resave: true,
    saveUninitialized: true,
  })
)

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')

router(app)
mongoConnect()

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
