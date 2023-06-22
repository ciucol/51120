const winston = require('winston')

const logger = winston.createLogger({
  transports: [new winston.transports.Console({ level: 'verbose' })],
})

module.exports = logger
