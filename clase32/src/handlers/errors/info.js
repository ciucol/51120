const generateUserErrorInfo = user => {
  return ` One or more properties were incomplete or not valid.
  List of required properties:
  first_name: needs to be a string, received: ${user.first_name}
  last_name: needs to be a string, received: ${user.last_name}
  email: needs to be a string, received: ${user.email}
  `
}

module.exports = generateUserErrorInfo
