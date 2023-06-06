const mongoose = require('mongoose')

// class MongoSingleton {
//   static #instance

//   constructor() {
//     mongoose.connect(
//       'mongodb+srv://admin:admin@coderbackend.0pp623p.mongodb.net/?retryWrites=true&w=majority'
//     )
//   }

//   static getInstance() {
//     if (this.#instance) {
//       console.log('Ya la teníamos')
//       return this.#instance
//     }

//     this.#instance = new MongoSingleton()
//     console.log('Nueva conexión')
//     return this.#instance
//   }
// }

class MongoConnect {
  static #instance
  constructor() {
    this.mongoConnect()
  }

  async mongoConnect() {
    try {
      await mongoose.connect(
        'mongodb+srv://admin:admin@coderbackend.0pp623p.mongodb.net/?retryWrites=true&w=majority'
      )
      console.log('db is connected')
    } catch (error) {
      console.log(error)
    }
  }

  static getInstance() {
    if (!this.#instance) {
      this.#instance = new MongoConnect()
      console.log('original')
      return this.#instance
    }

    console.log('copia')
    return this.#instance
  }
}

// module.exports = MongoSingleton
module.exports = MongoConnect
