const CustomRouter = require('../classes/CustomRouter.class')
const { generateToken } = require('../utils/jwt.util')

class AuthRouter extends CustomRouter {
  init() {
    this.post('/login', ['PUBLIC'], (req, res) => {
      const { email, password } = req.body

      //validacion db

      const user = {
        email,
        role: 'admin',
      }

      const token = generateToken(user)
      res.json({ message: 'Usuario logeado', token })
    })
  }
}

module.exports = AuthRouter
