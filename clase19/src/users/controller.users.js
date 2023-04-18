const { Router } = require('express')
const Users = require('../models/Users.model')

const router = Router()

router.post('/', async (req, res) => {
  try {
    const { first_name, last_name, email, age, password } = req.body
    const newUserInfo = {
      first_name,
      last_name,
      email,
      age,
      password,
    }

    const user = await Users.create(newUserInfo)

    res.status(201).json({ status: 'success', message: user })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ status: 'error', error: 'Internal server error' })
  }
})

module.exports = router
