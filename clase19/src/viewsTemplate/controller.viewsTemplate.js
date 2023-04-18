const { Router } = require('express')
const privateAccess = require('../middlewares/privateAccess.middleware')
const publicAccess = require('../middlewares/publicAccess.middleware')

const router = Router()

router.get('/', privateAccess, (req, res) => {
  const { user } = req.session
  res.render('profile.handlebars', { user })
})

router.get('/signup', publicAccess, (req, res) => {
  res.render('signup.handlebars')
})

router.get('/login', publicAccess, (req, res) => {
  res.render('login.handlebars')
})

module.exports = router
