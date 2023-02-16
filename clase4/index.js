// console.log(saludo('Mate', 'manana'))

// function saludo(nombre, momento) {
//   return {
//     manana: `Buenos días ${nombre}`,
//     tarde: `Buenos tardes ${nombre}`,
//     noche: `Buenos noches ${nombre}`
//   }[momento]
// }

// const suma = (num1, num2) => {
//   return num1 + num2
// }

// const resta = (num1, num2) => {
//   return num1 - num2
// }

// const multiplicacion = (num1, num2) => {
//   return num1 * num2
// }

// const division = (num1, num2) => {
//   return num1 / num2
// }

// const calculadora = (num1, num2, calculo) => {
//   return calculo(num1, num2)
// }

// calculadora(5, 3, (num1, num2) => {
//   console.log(num1 / num2)
// })

const arr = [3, 5, 7]

const newArray = arr.map(function (num) {
  return num * 3
})

console.log(newArray)