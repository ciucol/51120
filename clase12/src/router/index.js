const templatesController = require('../templates/controller.templates')

const router = app => {
  app.use('/', templatesController)
}

module.exports = router
