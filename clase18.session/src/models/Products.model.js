const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const collectionSchema = new mongoose.Schema({
  name: String,
  price: Number,
})

collectionSchema.plugin(mongoosePaginate)
const Products = mongoose.model('product', collectionSchema)

module.exports = Products
