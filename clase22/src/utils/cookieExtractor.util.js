const cookieExtractor = req => {
  let token = null

  if (req && req.cookies) {
    token = req.cookies['authToken']
  }

  return token
}

module.exports = cookieExtractor
