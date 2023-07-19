const usersController = require('../users/controller.users')
const booksController = require('../books/controller.books')

const router = app => {
  app.use('/users', usersController)
  app.use('/books', booksController)
}

module.exports = router
