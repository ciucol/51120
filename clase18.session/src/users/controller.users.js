const { Router } = require('express')

const router = Router()

router.get('/', auth, async (req, res) => {
  try {
    if (req.session.counter) {
      req.session.counter++
      return res.json({
        message: `${req.session.name} has visitado ${req.session.counter} veces`,
      })
    }

    req.session.counter = 1
    req.session.name = 'Mati'
    req.session.team = 'Rosario Central'

    res.json({
      message: `Bienvenido ${req.session.name} al counter, tú que eres de ${req.session.team}`,
    })
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message })
  }
})

router.get('/login', (req, res) => {
  const { username, password } = req.query

  if (username !== 'mate' || password !== 'mate123') {
    console.log(req.session)
    return res.json({ error: 'Datos invalidos' })
  }

  req.session.name = username
  req.session.role = 'superadmin'

  console.log(req.session)

  res.json({ message: 'Sesión iniciada' })
})

router.get('/delete', (req, res) => {
  req.session.destroy(error => {
    if (error) return res.json({ error })
    res.json({ message: 'Sesión finalizada' })
  })
})

function auth(req, res, next) {
  console.log('Inicia middleware de autenticación')
  console.log(req.session.name)
  console.log(req.session.role)
  console.log('FInaliza middleware de autenticación')
  if (req.session.name === 'mate' && req.session.role === 'superadmin') {
    return next()
  }

  return res.json({ error: 'No es una sesión valida' })
}

module.exports = router
