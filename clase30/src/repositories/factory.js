const { environment } = require('../config/app.config')

switch (environment) {
  case 'beta':
    console.log('envío con mail')
    module.exports = require('../adapters/mail.adapter')
    break

  case 'production':
    console.log('envío con sms')
    module.exports = require('../adapters/sms.adapter')
    break
}
