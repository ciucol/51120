import { Application } from 'express'

const router = (app: Application) => {
  app.use('/users', (req, res) => {
    res.json({ message: 'hi' })
  })
}

export default router

