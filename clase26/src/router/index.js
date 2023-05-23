const templatesController = require('../controllers/templates.controller')
const usersController = require('../controllers/users.controller')

const router = app => {
  app.use('/', templatesController)
  app.use('/users', usersController)
  app.use('*', (req, res) => {
    res.tatus.json({ status: error, error: 'Not found' })
  })
}

module.exports = router
