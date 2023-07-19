const usersController = require('../users/controller.users')
const petsController = require('../pets/controller.pets')
const productsController = require('../products/controller.products')

const router = app => {
  app.use('/users', usersController)
  app.use('/pets', petsController)
  app.use('/products', productsController)
}

module.exports = router
