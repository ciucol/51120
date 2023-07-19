const { Router } = require('express')
const UserDTO = require('../DTOs/user.dto')
const { createUser, getAll } = require('../services/users.service')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await getAll()

    res.json({ message: users })
  } catch (error) {
    console.log(error)
    res.status(500).json({ sttatus: 'error', message: 'Internal server error' })
  }
})

router.post('/', async (req, res) => {
  try {
    const newUserInfo = new UserDTO(req.body)

    const newUser = await createUser(newUserInfo)

    res.json({ message: newUser })
  } catch (error) {
    console.log(error)
    res.status(500).json({ sttatus: 'error', message: 'Internal server error' })
  }
})

module.exports = router
