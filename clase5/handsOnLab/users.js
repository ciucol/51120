const UserManager = require("./ManagerUsuarios");

const userManager = new UserManager('./Users.json')

const usuarios = async () => {
  const usuario1 = {
    nombre: 'Mate',
    apellido: 'Naran',
    edad: 3,
    curso: 1
  }
  const usuario2 = {
    nombre: 'Titín',
    apellido: 'Naran',
    edad: 1,
    curso: 1
  }
  const usuario3 = {
    nombre: 'Caro',
    apellido: 'Naran',
    edad: 30,
    curso: 1
  }


  await userManager.crearUsuario(usuario3)

  const data = await userManager.consultarUsuarios()
  console.log(data)
}

usuarios()
