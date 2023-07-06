const dotenv = require('dotenv')

const envFile = process.env.ENV_FILE

dotenv.config({
  path: `.env.${envFile}`,
})

module.exports = {
  environment: process.env.NODE_ENV,
  envFile,
}
