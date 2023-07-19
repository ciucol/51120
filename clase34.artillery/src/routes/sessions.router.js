import { Router } from 'express'
import sessionsController from '../controllers/sessions.controller.js'

const router = Router()

router.post('/register', sessionsController.registerUser)
router.post('/login', sessionsController.loginUser)

export default router
