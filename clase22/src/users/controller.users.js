const { Router } = require('express')
const Users = require('../models/Users.model')
const { generateToken, authToken } = require('../utils/jwt.utils')
const passport = require('passport')

const router = Router()

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const users = await Users.find()
      res.json({ status: 'success', message: users })
    } catch (error) {
      console.log(error.message)
      res.status(500).json({ status: 'error', error: 'Internal server error' })
    }
  }
)

router.post('/', async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body
    const newUserInfo = {
      first_name,
      last_name,
      email,
      password,
    }
    const newUser = await Users.create(newUserInfo)

    const access_token = generateToken({ email: newUser.email })

    res
      .status(201)
      .json({ status: 'success', message: newUser, token: access_token })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ status: 'error', error: 'Internal server error' })
  }
})

module.exports = router
