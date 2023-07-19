const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'products' })
})

module.exports = router
