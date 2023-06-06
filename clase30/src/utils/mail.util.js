const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: 'coder51120@gmail.com',
    pass: 'ylnrxgczycktsfvq',
  },
})

module.exports = transport
