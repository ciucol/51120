const logger = require('../logger/factory')

const addLogger = async (req, res, next) => {
  req.logger = logger
  req.logger.info(
    `${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`
  )

  next()
}

module.exports = addLogger
