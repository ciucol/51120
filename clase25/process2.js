const listNumbers = (...numbers) => {
  const types = numbers.map(number => typeof number)

  const invalidParams = types.filter(type => type !== 'number')

  if (invalidParams.length > 0) {
    console.log('Invalid parameters')
    process.exitCode = -4
    return
  }
}

listNumbers(1, 2, 3, 4)

// console()
// process.on('uncaughtException', message => {
//   console.log(message, 'mensaje de error')
// })

process.on('exit', code => {
  if (code === -4) {
    return console.log(
      'Proceso finalizado por argumentación inválida en una función'
    )
  }

  if (code === 0) {
    return console.log('Todos los parámetros son validos')
  }
})
