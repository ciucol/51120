const { Router } = require('express')

const router = Router()

const users = []

router.post('/', (req, res) => {
  console.log(req.body)

  users.push(req.body)

  res.json({ message: 'Nuevo usuario creado' })
})

module.exports = router
