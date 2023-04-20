const { Router } = require('express')
const Users = require('../models/Users.model')
const { hashPassword } = require('../utils/cryptPassword')

const router = Router()

router.post('/', async (req, res) => {
  try {
    const { first_name, last_name, email, age, password } = req.body
    const newUserInfo = {
      first_name,
      last_name,
      email,
      age,
      password: hashPassword(password),
    }

    const user = await Users.create(newUserInfo)

    res.status(201).json({ status: 'success', message: user })
  } catch (error) {
    console.log(error.message)
    if (error.code === 11000) {
      return res.status(400).json({ status: 'error', error: 'User existed' })
    }
    res.status(500).json({ status: 'error', error: 'Internal server error' })
  }
})

module.exports = router
