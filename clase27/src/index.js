const express = require('express')
const cors = require('cors')
const MongoConnect = require('../db')

const app = express()

app.use(cors())

const connect1 = MongoConnect.getInstance()

app.use('/test', (req, res) => {
  res.json({ message: 'Hola origen diferente' })
})

app.listen(3000, () => {
  console.log(3000)
})
