const fs = require('fs')

const file = './archivoPromesas.txt'

const operacionesAsincronas = async () => {
  try {
    await fs.promises.writeFile(file, 'archivo con promesas')

    const data = await fs.promises.readFile(file, 'utf-8')
    console.log(data)

    await fs.promises.appendFile(file, ' editando con promesas')

    const newData = await fs.promises.readFile(file, 'utf-8')
    console.log(newData)

    await fs.promises.unlink(file)
  } catch (error) {
    console.log(error)
  }
}

operacionesAsincronas()