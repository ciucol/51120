const AuthRouter = require('../auth/controller.auth')
const dictionaryController = require('../controller/dictionary.controller')
const petsController = require('../controller/pets.controller')
const UsersRouter = require('../users/controller.users')

const usersRouter = new UsersRouter()
const authRouter = new AuthRouter()

const router = app => {
  app.use('/auth', authRouter.getRouter())
  app.use('/dictionary', dictionaryController)
  app.use('/pets', petsController)
  app.use('/users', usersRouter.getRouter())
  app.use('*', (req, res) => {
    res.status(404).json({ error: 'Ooops Page not found' })
  })
}

module.exports = router
