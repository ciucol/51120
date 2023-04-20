const { Router } = require('express')
const Users = require('../models/Users.model')
const { isValidPassword, hashPassword } = require('../utils/cryptPassword')

const router = Router()

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await Users.findOne({ email })
    console.log(user)
    if (!user)
      return res.status(401).json({
        status: 'error',
        error: 'El usuario y la contraseña no coinciden',
      })

    if (!isValidPassword(password, user))
      return res.status(401).json({
        status: 'error',
        error: 'El usuario y la contraseña no coinciden',
      })

    req.session.user = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    }

    res.json({ status: 'success', message: 'Sesión iniciada' })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

router.get('/logout', (req, res) => {
  req.session.destroy(error => {
    if (error) return res.json({ error })
    res.redirect('/login')
  })
})

router.patch('/forgotPassword', async (req, res) => {
  try {
    const { email, password } = req.body
    const passwordEncrypted = hashPassword(password)
    await Users.updateOne({ email }, { password: passwordEncrypted })

    res.json({ message: 'Password updated' })
  } catch (error) {
    res.json({ error: error.message })
  }
})

module.exports = router
