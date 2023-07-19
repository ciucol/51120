import express from 'express'
import router from './router/index.js'
import { addLogger } from './middlewares/logger.middleware.js'

const app = express()

app.use(addLogger)

router(app)

app.listen(3000, () => {
  console.log(3000)
})
