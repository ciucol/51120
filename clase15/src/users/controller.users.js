const { Router } = require('express')
const Users = require('../models/Users.model')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await Users.find({ status: true })

    res.json({ message: users })
  } catch (error) {
    console.log(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const { first_name, last_name, email } = req.body
    const newUserInfo = {
      first_name,
      last_name,
      email,
    }

    const newUser = await Users.create(newUserInfo)

    res.status(201).json({ message: newUser })
  } catch (error) {
    console.log(error)
    if (error.code === 11000) {
      res.status(400).json({ error: 'El usuario ya existe' })
    }
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { first_name, last_name, email } = req.body

    const updateUserInfo = {
      first_name,
      last_name,
      email,
    }

    const updateUser = await Users.updateOne({ _id: id }, updateUserInfo)

    res.json({ message: updateUser })
  } catch (error) {
    res.json(error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const updateUser = await Users.updateOne({ _id: id }, { status: false })

    res.json({ message: updateUser })
  } catch (error) {
    res.json(error)
  }
})

module.exports = router
