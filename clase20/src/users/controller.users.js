const { Router } = require('express')
const Users = require('../models/Users.model')
const { createHash } = require('../utils/cryptPassword.util')

const router = Router()

router.get('/', (req, res) => {})

router.post('/', async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body

    const newUserInfo = {
      first_name,
      last_name,
      email,
      password: createHash(password),
    }

    const newUser = await Users.create(newUserInfo)

    res.json({ message: newUser })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: 'Internal server error' })
  }
})

module.exports = router
