const express = require('express')
const cookieParser = require('cookie-parser')
const handlebars = require('express-handlebars')
const router = require('./router')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use(cookieParser())

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')

router(app)

app.listen(3000, () => {
  console.log(3000)
})
