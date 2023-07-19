const fs = require('fs')

class FileManager {
  books = []
  constructor() {}

  async loadItems() {
    if (fs.existsSync(process.cwd() + '/src/files/Books.json')) {
      const data = await fs.promises.readFile(
        process.cwd() + '/src/files/Books.json'
      )
      const newBooks = JSON.parse(data)
      console.log('desde la clase')
      return newBooks
    }
    return 'El archivo no existe'
  }

  async saveItems() {
    await fs.promises.writeFile()
  }
}

module.exports = FileManager
