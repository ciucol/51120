class MessageRepository {
  constructor(messageTool) {
    this.messageTool = messageTool
  }

  async send(newUserInfo) {
    await this.messageTool.send(newUserInfo)
  }
}

module.exports = MessageRepository
