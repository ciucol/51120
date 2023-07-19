const usersController = require('../users/controller.users')
const authController = require('../auth/controller.auth')
const viewsTemplateController = require('../viewsTemplate/controller.viewsTemplate')

const router = app => {
  app.use('/', viewsTemplateController)
  app.use('/auth', authController)
  app.use('/users', usersController)
}

module.exports = router
