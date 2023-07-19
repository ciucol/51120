const mongoose = require('mongoose')

const collectionName = 'product'

const collectionSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  category: String,
  price: Number,
})

const Products = mongoose.model(collectionName, collectionSchema)

module.exports = Products
