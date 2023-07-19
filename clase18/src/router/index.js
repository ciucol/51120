const cookiesController = require('../cookies/controller.cookies')

const router = app => {
  app.use('/cookies', cookiesController)
}

module.exports = router
