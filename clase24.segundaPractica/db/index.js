const mongoose = require('mongoose')

const mongoConnect = async () => {
  try {
    await mongoose.connect('mongodb://mate:mate123@localhost:27017/51120db')
    console.log('db is connected')
  } catch (error) {
    console.log(error)
  }
}

module.exports = mongoConnect
