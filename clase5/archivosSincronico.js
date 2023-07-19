const fs = require('fs')

const file = './archivoSincronico.txt'

console.log(fs.existsSync(file,), 1)

fs.writeFileSync(file, 'Hola gente')
console.log(fs.existsSync(file), 2)

const data = fs.readFileSync(file, 'utf-8')
console.log(data)

fs.appendFileSync(file, ' Bienvenidos todos')
const newData = fs.readFileSync(file, 'utf-8')
console.log(newData)

fs.unlinkSync(file)
console.log(fs.existsSync(file), 3)