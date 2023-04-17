const { Router } = require('express')

const router = Router()

router.get('/view', (req, res) => {
  res.render('index.handlebars')
})

router.post('/set', (req, res) => {
  const message = req.body

  res
    .cookie('coderCookie', JSON.stringify(message), {
      maxAge: 60000,
    })
    .json({ message: 'cookie' })
})

router.get('/get', (req, res) => {
  console.log(req.cookies)
  res.json({ cookies: req.cookies })
})

router.get('/clear', (req, res) => {
  res.clearCookie('coderCookie').send('cookie eliminada')
})

module.exports = router
