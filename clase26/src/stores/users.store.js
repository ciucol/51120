const users = []

const getAll = async () => {
  return await Users.find()
}

const getOne = async item => {
  return await Users.findOne({ item })
}

const create = async userInfo => {
  return await Users.create(userInfo)
}

module.exports = {
  getAll,
  getOne,
  create,
}
