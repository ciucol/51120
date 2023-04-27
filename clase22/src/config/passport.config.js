const passport = require('passport')
const jwt = require('passport-jwt')
const cookieExtractor = require('../utils/cookieExtractor.util')

const JWTStrategy = jwt.Strategy

const initializePassport = () => {
  passport.use(
    'jwt',
    new JWTStrategy(
      {
        jwtFromRequest: jwt.ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: 'coderSecret',
      },
      async (jwt_payload, done) => {
        try {
          done(null, jwt_payload)
        } catch (error) {
          done(error)
        }
      }
    )
  )
}

module.exports = initializePassport
