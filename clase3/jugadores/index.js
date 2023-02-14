const Jugador = require("./class");

const messi = new Jugador('Lio Messi', 172, 'PSG', 'izquierda')

messi.correr()
messi.patear('izquierda')
messi.presentarse()
console.log(messi.celebrar(1))
messi.obtenerSalario()
console.log(messi.salario)

const cristiano = new Jugador('Cristiano', 180, 'No me acuerdo de arabia')
cristiano.presentarse()
cristiano.patear('izquierda')

messi.frases.push()
