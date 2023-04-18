const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')
const router = require('./router')
const cookieParser = require('cookie-parser')

const fileStorage = FileStore(session)
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(
  session({
    store: new fileStorage({ path: './sessions', ttl: 15, retries: 0 }),
    secret: 'coderSecret',
    resave: false,
    saveUninitialized: false,
  })
)

router(app)

app.listen(3001, () => {
  console.log(3001)
})
