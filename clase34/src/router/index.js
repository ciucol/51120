import usersController from '../controllers/users.controller.js'

const router = app => {
  app.use('/users', usersController)
}

export default router
