const { Router } = require('express')
const Users = require('../model/Users.model')
const FilesDao = require('../dao/files.dao')

const usersFile = new FilesDao('Users.json')
const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await Users.find()

    res.json({ status: 'success', message: users })
  } catch (error) {
    res.status(400).json({ status: 'error', error })
  }
})

router.get('/loadData', async (req, res) => {
  try {
    const users = await usersFile.getItems()
    const newUsers = await Users.insertMany(users)

    res.json({ status: 'success', message: newUsers })
  } catch (error) {
    res.json({ status: 'error', error })
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

    res.json({ status: 'success', message: newUser })
  } catch (error) {
    res.status(400).json({ status: 'error', error })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { product } = req.body

    const user = await Users.findOne({ _id: id })
    user.products.push({ product })

    const response = await Users.updateOne({ _id: id }, user)

    res.json({ message: response })
  } catch (error) {
    console.log(error)
    res.json({ error })
  }
})

router.delete('/', async (req, res) => {
  try {
    await Users.deleteMany()
    res.json({ message: 'users eliminados' })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
