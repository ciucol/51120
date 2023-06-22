import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  req.logger.warn('Ten cuidado con esto!')
  res.json({ message: 'Hi server' })
})

export default router
