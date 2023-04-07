const mongoose = require('mongoose')

const collectionName = 'book'

const collectionSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  year: Number,
  image: String,
})

const Books = mongoose.model(collectionName, collectionSchema)

module.exports = Books
