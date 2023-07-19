class Jugador {
  nombre = ''
  estatura
  equipo = ''
  celebraciones = [
    'con las manos al cielo',
    'tirandose al suelo',
    'como avión'
  ]
  #salario = 100000000

  constructor(nombre, estatura, equipo, pierna = 'derecha') {
    this.nombre = nombre
    this.estatura = estatura
    this.equipo = equipo
    this.pierna = pierna
    this.frases = []
  }

  presentarse() {
    console.log(`Hola soy ${this.nombre}`)
  }

  correr() {
    console.log('corriendo por la cancha')
  }

  patear(pierna) {
    console.log(`Pateando con la pierna ${pierna} al ángulo y su pierna hábil es la ${this.pierna}`)
  }

  celebrar(celebración) {
    const celebracion = this.celebraciones[celebración - 1]

    // if(celebracion === false){
    //   return 'No existe esa celebración'
    // }

    return celebracion
  }

  obtenerSalario() {
    const salarioNeto = this.#salario * 0.40
    console.log(`${this.nombre} gana ${salarioNeto}`)
  }

  verCelebraciones() {

  }
}

module.exports = Jugador


// propiedades y métodos
// variables   - funciones
// valor que - cosas que algo
//algo tiene - puede hacer