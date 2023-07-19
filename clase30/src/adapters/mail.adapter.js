const transport = require('../utils/mail.util')

class MailAdapter {
  async send(newUserInfo) {
    await transport.sendMail({
      from: 'coder51120@gmail.com',
      to: newUserInfo.email,
      subject: `Hola ${newUserInfo.name}, bienvenido a la plataforma`,
      html: `
        <div>
          <h1>En hora buena por registarte!</h1>
          <img src="cid:sanBernardo.jpeg" />
    
          <p>Acepta este perrito de bienvenida</p>
        </div>
      `,
      attachments: [
        {
          filename: 'sanBernardo.jpeg',
          path: process.cwd() + '/src/images/sanBernardo.jpeg',
          cid: 'sanBernardo.jpeg',
        },
      ],
    })
  }
}

module.exports = MailAdapter
