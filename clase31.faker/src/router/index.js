const usersController = require('../controllers/users.controller')

const router = app => {
  app.use('/users', usersController)
}

module.exports = router
