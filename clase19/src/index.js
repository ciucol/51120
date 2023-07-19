const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const MongoStore = require('connect-mongo')
const handlebars = require('express-handlebars')
const router = require('./router')
const mongoConnect = require('../db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(__dirname + '/public'))
app.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        'mongodb+srv://admin:admin@coderbackend.0pp623p.mongodb.net/51120sessions?retryWrites=true&w=majority',
      mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
    }),
    secret: 'coderSecret',
    resave: false,
    saveUninitialized: false,
  })
)

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')

mongoConnect()

router(app)

app.listen(3001, () => {
  console.log(3001)
})
