const { environment } = require('../config/app.config.js')

switch (environment) {
  case 'development':
    console.log('dev')
    module.exports = require('./dev.logger.js')
    break

  case 'production':
    console.log('prod')
    module.exports = require('./prod.logger.js')
    break
}
