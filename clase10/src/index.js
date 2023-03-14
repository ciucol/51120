const express = require('express')
const handlebars = require('express-handlebars')
const viewsRouter = require('./router/views.router')
const usersRouter = require('./router/users.router')

const port = 3000

const app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use('/views', viewsRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
