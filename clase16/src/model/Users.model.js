const mongoose = require('mongoose')

const collectionName = 'user'

const collectionSchema = new mongoose.Schema({
  first_name: {
    type: String,
    index: true,
  },
  last_name: String,
  email: {
    type: String,
    unique: true,
  },
  products: {
    type: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'product',
        },
      },
    ],
    default: [],
  },
})

collectionSchema.pre('find', function () {
  this.populate('products.product')
})

const Users = mongoose.model(collectionName, collectionSchema)

module.exports = Users
