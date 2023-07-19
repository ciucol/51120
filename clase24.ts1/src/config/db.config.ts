import dotenv from 'dotenv'

dotenv.config()

const db = {
  dbAdmin: process.env.DB_ADMIN,
  dbPass: process.env.DB_PASSWORD
}