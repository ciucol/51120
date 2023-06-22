const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  req.logger.advertencia('Ten cuidado con esto!')
  res.json({ message: 'Hi server' })
})

module.exports = router
