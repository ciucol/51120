const { Router } = require('express')
const userService = require('../service/users.service')

const router = Router()

router.get('/', async (req, res) => {
  const users = await userService.getAll()
  res.json({ message: users })
})

router.post('/', async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body

    const userInfo = {
      first_name,
      last_name,
      email,
      password,
    }

    const response = userService.create(userInfo)

    res.json({ mesage: response })
  } catch (error) {
    res.json({ error })
  }
})

module.exports = router
