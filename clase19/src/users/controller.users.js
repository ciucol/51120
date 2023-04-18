const { Router } = require('express')

const router = Router()

router.get('/session', (req, res) => {
  if (req.session.counter) {
    req.session.counter++
    return res.json({ message: `${req.session.counter} veces` })
  }

  req.session.counter = 1
  req.session.role = 'admin'
  req.session.status = true
  res.json({ message: 'Bienvenido' })
})

module.exports = router
