const dotenv = require('dotenv')

dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'local'}`,
})

module.exports = {
  port: process.env.PORT,
  googleApiKey: process.env.GOOGLE_API_KEY,
}
