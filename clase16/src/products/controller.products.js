const { Router } = require('express')
const Products = require('../model/Products.model')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const products = await Products.find()
    res.json({ message: products })
  } catch (error) {
    res.json({ error })
  }
})

router.post('/', async (req, res) => {
  try {
    const { title, category, price } = req.body
    const newProductInfo = {
      title,
      category,
      price,
    }
    const newProduct = await Products.create(newProductInfo)

    res.json({ message: newProduct })
  } catch (error) {
    res.json({ error })
  }
})

module.exports = router
