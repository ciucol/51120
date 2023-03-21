const express = require('express')
const handlebars = require('express-handlebars')
const { Server } = require('socket.io')
const router = require('./router')

const port = 9000
const messages = []

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/public'))

router(app)

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')

const httpServer = app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})

const io = new Server(httpServer)

io.on('connection', socket => {
  console.log(`Cliente conectado con id: ${socket.id}`)

  socket.on('newUser', user => {
    socket.broadcast.emit('userConnected', user)
    socket.emit('messageLogs', messages)
  })

  socket.on('message', data => {
    messages.push(data)
    io.emit('messageLogs', messages)
  })
})
