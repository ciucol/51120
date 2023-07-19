const fs = require('fs')

const file = './archivoCallback.txt'

fs.writeFile(file, 'Archivos con callbacks', error => {
  if (error) console.log(error)

  fs.readFile(file, 'utf-8', (error, response) => {
    if (error) console.log(error)
    console.log(response)

    fs.appendFile(file, ' esta es una actualización', error => {
      if (error) console.log(error)

      fs.readFile(file, 'utf-8', (error, response) => {
        if (error) console.log(error)
        console.log(response)

        fs.unlink(file, error => {
          if (error) console.log(error)
        })
      })
    })
  })
})