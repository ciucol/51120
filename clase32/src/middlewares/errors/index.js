const EnumErrors = require('../../handlers/errors/EnumError')

const errorHandler = (error, req, res, next) => {
  console.log(error.cause)

  switch (error.code) {
    case EnumErrors.INVALID_TYPES_ERROR:
      res.json({ status: 'Error', error: error.name })
      break

    default:
      res.json({ status: 'Error', error: 'Unhandled error' })
      break
  }
}

module.exports = errorHandler
