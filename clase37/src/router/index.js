const usersController = require('../controller/users.controller')

const router = app => {
  app.use('/users', usersController)
}

module.exports = router
