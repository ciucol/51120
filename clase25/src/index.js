require('dotenv').config()
const { fork } = require('child_process')
require('./commander')
const { port, googleApiKey } = require('./config')

const express = require('express')

const app = express()

console.log(process.env.GOOGLE_API_KEY)
console.log(process.pid, 'proceso padre')

app.get('/saludo', (req, res) => {
  res.json({ message: 'Hola' })
})

app.get('/suma', (req, res) => {
  const child = fork('./src/childProcess/operacionCompleja.childProcess.js')

  child.send('Hola, calculemos')
  child.on('message', result => {
    res.json({ message: `El resultado es ${result}` })
  })
})

app.listen(port, () => {
  console.log(port)
})
