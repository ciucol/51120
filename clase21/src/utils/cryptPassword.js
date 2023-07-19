const bcrypt = require('bcrypt')

exports.hashPassword = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

exports.isValidPassword = (password, user) => {
  return bcrypt.compareSync(password, user.password)
}
