import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  req.logger.warn('Ten cuidado con esto!')
  res.json({ message: 'Hi server' })
})

router.get('/easy', (req, res) => {
  let suma = 0
  for (let i = 0; i < 1000000; i++) {
    suma += i
  }

  res.json({ suma })
})

router.get('/hard', (req, res) => {
  let suma = 0
  for (let i = 0; i < 5e8; i++) {
    suma += i
  }

  res.json({ suma })
})

export default router
