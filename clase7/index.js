const express = require('express')
const ProductManager = require('./class/ProductManager')

const productManager = new ProductManager()

const port = 3000
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/saludo', (req, res) => {
  res.json({ message: 'Hola a todos desde ExpressJS' })
})

app.get('/bienvenido', (req, res) => {
  res.send(`<h1 style="color:blue">Bienvenidos todos</h1>`)
})

app.get('/usuario', (req, res) => {
  const user = {
    nombre: 'Mate',
    apellido: 'Naran',
    edad: 3,
    correo: 'mate@naran.com'
  }

  res.json({ message: user })
})

app.get('/post/:id/comments/:idComment', (req, res) => {
  const { id, idComment } = req.params

  res.json({ message: `El id del post es el ${id} y el comentario es el ${idComment}` })
})

app.get('/consolas', (req, res) => {
  const { ordering, orderBy, country = 'arg', price_low = 0, price_high = 1000 } = req.query

  const queries = {
    ordering,
    orderBy,
    country,
    price_low,
    price_high
  }

  console.log(queries)

  res.json({ message: 'Las consolas' })
})

app.get('/products', async (req, res) => {

  const products = await productManager.loadItems()
  // leer el archivo Products.json
  // lo cargamos en un objeto

  res.send({ products: products })
})

app.get('/products/:pid', async (req, res) => {
  const { pid } = req.params
  const products = await productManager.loadItems()
  const product = products.find(product => product.id === pid)

  // leer el archivo Products.json
  // lo cargamos en un objeto

  res.send({ products: obj })
})

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
