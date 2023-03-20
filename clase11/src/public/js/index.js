const socket = io()

socket.on('mensajeServidor', message => {
  console.log(message)
})

socket.emit('mensajeCliente', 'Hola desde el cliente')

socket.on('mensajeRespuesta', message => {
  console.log(message)
})

socket.on('mensajeTodosMenosYo', message => {
  console.log(message)
})

socket.on('mensajeParaTodos', message => {
  console.log(message)
})
