const fs = require('fs')

class UserManager {
  constructor(path) {
    this.users = []
    this.path = path
  }

  async crearUsuario(usuario) {
    try {
      const { nombre, apellido, edad, curso } = usuario

      const userInfo = {
        nombre,
        apellido,
        edad,
        curso
      }

      this.users.push(userInfo)

      await fs.promises.writeFile(this.path, JSON.stringify(this.users, null, '\t'))

      return 'Usuario creado con éxito'
    } catch (error) {
      return error
    }
  }

  async consultarUsuarios() {
    try {
      const data = await fs.promises.readFile(this.path, 'utf-8')
      const response = JSON.parse(data)
      return response
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = UserManager