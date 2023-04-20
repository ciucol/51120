const { Router } = require('express')
const Users = require('../models/Users.model')
const { passwordValidate } = require('../utils/cryptPassword.util')

const router = Router()

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await Users.findOne({ email })
    if (!user)
      return res.status(400).json({ error: 'User and password not match' })

    const isPasswordValid = passwordValidate(password, user)
    if (!isPasswordValid)
      return res.status(401).json({ message: 'User and password not match' })

    res.json({ message: 'success login' })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: 'Internal server error' })
  }
})

module.exports = router
