const sessionController = require('../users/controller.users')
const productsController = require('../products/controller.products')

const router = app => {
  app.use('/session', sessionController)
  app.use('/products', productsController)
}

module.exports = router
