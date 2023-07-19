const mongoose = require('mongoose')

const collectionName = 'user'

const collectionSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
})

const Users = mongoose.model(collectionName, collectionSchema)

module.exports = Users
