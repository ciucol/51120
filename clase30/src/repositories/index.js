const MessageRepository = require('./message.repository')
const MessageAdapter = require('./factory')

const message = new MessageRepository(new MessageAdapter())

module.exports = message
