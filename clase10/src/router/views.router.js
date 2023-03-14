const { Router } = require('express')

const router = Router()

const usersInfo = [
  {
    name: 'Edu',
    course: 'Backend',
  },
  {
    name: 'Mati',
    course: 'ReactJS',
  },
  {
    name: 'Sandro',
    course: 'NodeJS',
  },
]

const user = {
  name: 'Mate',
  role: 'admin',
}

router.get('/', (req, res) => {
  res.render('index.handlebars', {
    usersInfo,
    title: 'Curso de NodeJS y Express',
    user,
    role: user.role === 'admin',
  })
})

router.get('/login', (req, res) => {
  res.render('login', { style: 'login.css' })
})

router.get('/register', (req, res) => {
  res.render('register')
})

module.exports = router
