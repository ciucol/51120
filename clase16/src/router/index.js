const usersController = require('../users/controller.users')
const productsController = require('../products/controller.products')

const router = app => {
  app.use('/users', usersController)
  app.use('/products', productsController)
}

module.exports = router
