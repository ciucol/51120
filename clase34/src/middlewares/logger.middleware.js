import getLogger from '../logger/factory.js'

export const addLogger = async (req, res, next) => {
  const { logger } = await getLogger()
  req.logger = logger
  req.logger.info(
    `${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`
  )

  next()
}
