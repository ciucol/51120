const { Router } = require('express')
const generateUsers = require('../utils/mock.util')

const router = Router()

router.get('/', (req, res) => {
  const { users } = req.query
  const user = generateUsers(users)
  res.json({ message: user })
})

module.exports = router
