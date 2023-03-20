const express = require('express')
const handlebars = require('express-handlebars')
const { Server } = require('socket.io')
const router = require('./router')

const port = 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

router(app)

const httpServer = app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})

const io = new Server(httpServer)

io.on('connection', socket => {
  console.log(socket.id)
  console.log('Cliente conectado')

  io.emit('mensajeServidor', 'Hola desde el servidor!!!')

  socket.on('mensajeCliente', message => {
    console.log(message)

    socket.emit('mensajeRespuesta', { message: 'Hola', id: socket.id })

    socket.broadcast.emit(
      'mensajeTodosMenosYo',
      'hola a todos menos al que envió'
    )

    io.emit('mensajeParaTodos', 'no discrimino')
  })
})
