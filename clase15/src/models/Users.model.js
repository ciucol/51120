const mongoose = require('mongoose')

const usersCollection = 'student'

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
})

const Students = mongoose.model(usersCollection, userSchema)

module.exports = Students
