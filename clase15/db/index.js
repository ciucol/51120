const mongoose = require('mongoose')

const dbConnect = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:admin@coderbackend.0pp623p.mongodb.net/db51120?retryWrites=true&w=majority'
    )
    console.log('db is connected')
  } catch (error) {
    console.log(error)
  }
}

module.exports = dbConnect
