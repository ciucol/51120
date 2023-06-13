const suma = (...numbers) => {
  // if (!num1 && !num2) return 0
  // if (typeof num1 !== 'number' || typeof num2 !== 'number') return null

  // const notNumber = numbers.find(number => typeof number !== 'number')

  if (!numbers.every(number => typeof number === 'number')) return null
  // if (notNumber) return null

  return numbers.reduce((prev, curr) => prev + curr, 0)
}

module.exports = suma
