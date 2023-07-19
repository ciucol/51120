const { Router } = require('express')
const Users = require('../dao/models/Users.model')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await Users.find()
    res.json({ message: users })
  } catch (error) {
    res.json({ error })
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, lastName, email } = req.body
    const newUserInfo = {
      name,
      lastName,
      email,
    }

    const newUser = await Users.create(newUserInfo)
    res.json({ message: newUser })
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Esta cuenta ya existe' })
    }

    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

module.exports = router
