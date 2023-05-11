const CustomRouter = require('../classes/CustomRouter.class')

class UsersRouter extends CustomRouter {
  init() {
    this.get('/', ['ADMIN'], (req, res) => {
      res.sendSuccess('Todos los usuarios')
    })

    this.put('/', ['ADMIN', 'USER', 'PREMIUM'], (req, res) => {
      res.sendSuccess('Actualizado')
    })
  }
}

module.exports = UsersRouter
