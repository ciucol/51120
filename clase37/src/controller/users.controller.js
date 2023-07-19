const { Router } = require('express')
const UserDTO = require('../DTOs/User.dto')
const userService = require('../services/users.service')
const { environment } = require('../config/app.config')

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: environment })
})

router.post('/', (req, res) => {
  const newUserInfo = new UserDTO(req.body)
  userService.create(newUserInfo)
  res.json({ message: 'Usuario creado con éxito' })
})

module.exports = router
