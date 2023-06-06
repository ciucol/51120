const twilio = require('twilio')
const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_SMS_NUMBER,
} = require('../utils/sms.utils')

class SmsAdapter {
  async send(newUserInfo) {
    const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

    await client.messages.create({
      body: `Hola ${newUserInfo.name}, bienvenido a la plataforma, en hora buena por registarte!`,
      from: TWILIO_SMS_NUMBER,
      to: newUserInfo.phone,
    })
  }
}

module.exports = SmsAdapter
