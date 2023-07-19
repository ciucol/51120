const { Router } = require('express')
const UsersDAO = require('../DAOs/mongo/Users.dao')

const Users = new UsersDAO()

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await Users.getAll()

    res.json({ message: users })
  } catch (error) {
    res.json({ error })
  }
})

router.post('/', async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body

    const newUserInfo = {
      first_name,
      last_name,
      email,
      password,
    }

    const newUser = await Users.insertOne(newUserInfo)

    res.json({ message: newUser })
  } catch (error) {
    console.log(error)
    res.json({ error })
  }
})

router.delete('/', async (req, res) => {
  await Users.deleteAllOnlyForDevs()
  res.json({ message: 'todo se derrumbó' })
})

module.exports = router
