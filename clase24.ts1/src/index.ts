import express from 'express'
import router from './router'

const app = express()

router(app)

app.listen(9000, () => {
  console.log(9000)
})
