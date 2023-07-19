const usersStore = require('../stores/users.store')

const getAll = async () => {
  const users = await usersStore.getAll()

  const usersMapper = users.map(user => ({
    first_name: user.first_name,
    last_name: user.last_name,
  }))

  return usersMapper
}

const create = async userInfo => {
  try {
    const passwordHashed = hashPassword(userInfo.password)

    const newUserInfo = {
      first_name,
      last_name,
      email,
      password: passwordHashed,
      createdDate: new Date(),
    }

    const user = await usersStore.getOne(newUserInfo.email)

    if (user) throw new Error('El usuario existe')

    const newUser = await usersStore.create(newUserInfo)

    return newUser
  } catch (error) {
    throw error
  }
}

module.exports = {
  create,
  getAll,
}
