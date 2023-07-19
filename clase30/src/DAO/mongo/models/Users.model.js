const mongoose = require('mongoose')

const userCollection = 'user'

const userSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  fullname: String,
  email: String,
  phone: String,
  role: String,
})

const Users = mongoose.model(userCollection, userSchema)

module.exports = Users
