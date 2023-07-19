require('colors')

const suma = require('../suma')

let testTotales = 0
let testPasados = 0

console.log(
  'La función debe devolver null si algún parámetro no es numérico'.underline
    .yellow
)
testTotales++
const resultTest1 = suma(5, '9')
const expect1 = null
if (resultTest1 === expect1) {
  console.log('Test 1 pasó'.green)
  testPasados++
} else {
  console.log('Test 1 no pasó'.red)
  console.log(`Se esperaba ${expect1}`.green)
  console.log(`Se recibió ${resultTest1}`.red)
}

console.log(
  'La función debe devolver 0 si no se pasó ningún parámetro'.underline.yellow
)
testTotales++
const resultTest2 = suma()
const expect2 = 0
if (resultTest2 === expect2) {
  console.log('Test 2 pasó'.green)
  testPasados++
} else {
  console.log('Test 2 no pasó'.red)
  console.log(`Se esperaba ${expect2}`.green)
  console.log(`Se recibió ${resultTest1}`.red)
}

console.log(
  'La función debe poder realizar la suma correctamente'.underline.yellow
)
testTotales++
const resultTest3 = suma(2, 2)
const expect3 = 4
if (resultTest3 === expect3) {
  console.log('Test 3 pasó'.green)
  testPasados++
} else {
  console.log('Test 3 no pasó'.red)
  console.log(`Se esperaba ${expect3}`.green)
  console.log(`Se recibió ${resultTest3}`.red)
}

console.log(
  'La función debe poder hacer la suma con cualquier cantidad de números'
    .underline.yellow
)
testTotales++
const resultTest4 = suma(8, 2, 16, 4, 63)
const expect4 = 93
if (resultTest4 === expect4) {
  console.log('Test 3 pasó'.green)
  testPasados++
} else {
  console.log('Test 4 no pasó'.red)
  console.log(`Se esperaba ${expect4}`.green)
  console.log(`Se recibió ${resultTest4}`.red)
}

if (testPasados < testTotales) {
  console.log(`${testPasados} test pasados de ${testTotales} test totales`.red)
} else {
  console.log(
    `${testPasados} test pasados de ${testTotales} test totales`.green
  )
}
