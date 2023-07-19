const usersController = require('../users/controller.users')
const authController = require('../auth/controller.auth')

const router = app => {
  app.use('/auth', authController)
  app.use('/users', usersController)
}

module.exports = router
