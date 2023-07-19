const EntityDAO = require('../DAO/mongo/Entity.dao')
const message = require('../repositories')

const Users = new EntityDAO('Users')

const getAll = async () => {
  try {
    return await Users.getAll()
  } catch (error) {
    throw error
  }
}

const createUser = async newUserInfo => {
  try {
    const newUser = await Users.create(newUserInfo)

    await message.send(newUserInfo)

    return newUser
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAll,
  createUser,
}
