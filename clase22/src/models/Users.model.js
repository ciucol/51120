const mongoose = require('mongoose')

const collectionName = 'users'

const collectionSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: {
    type: String,
    default: 'user',
  },
})

const Users = mongoose.model(collectionName, collectionSchema)

module.exports = Users
