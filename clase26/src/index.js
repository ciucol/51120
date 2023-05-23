const express = require('express')
const router = require('./router')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

router(app)

app.listen(3000, () => {
  console.log(3000)
})
