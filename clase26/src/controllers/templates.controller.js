const { Router } = require('express')
const userService = require('../service/users.service')

const router = Router()

router.get('/', async (req, res) => {
  res.render('home.handlebars')
})

module.exports = router
