const jwt = require('jsonwebtoken')

const SECRET_KEY = 'coderSecret'

exports.generateToken = user => jwt.sign(user, SECRET_KEY)

exports.verifyToken = token => jwt.verify(token, SECRET_KEY)
