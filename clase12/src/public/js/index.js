const socket = io()

const swal = async () => {
  const chatBox = document.getElementById('chatBox')

  try {
    const result = await Swal.fire({
      title: 'Identificate',
      input: 'text',
      text: 'Ingresa un usuario para chatear',
      inputValidator: value => {
        return !value && 'Necesitas ingresar un usuario para continuar'
      },
      allowOutsideClick: false,
    })

    const user = result.value

    socket.emit('newUser', user)

    socket.on('userConnected', user => {
      Swal.fire({
        text: `Se acaba de conectar ${user} al chat`,
        toast: true,
        position: 'top-right',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        icon: 'success',
      })
    })

    chatBox.addEventListener('keyup', e => {
      if (e.key === 'Enter') {
        if (chatBox.value.trim().length > 0) {
          socket.emit('message', { user, message: chatBox.value })
          chatBox.value = ''
        }
      }
    })
  } catch (error) {
    console.log(error)
  }
}

socket.on('messageLogs', data => {
  const log = document.getElementById('messageLogs')
  let messages = ''

  data.forEach(message => {
    messages = messages + `${message.user}: ${message.message}</br>`
  })

  log.innerHTML = messages
})

swal()
