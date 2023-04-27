const { Router } = require('express')
const Users = require('../models/Users.model')
const { generateToken } = require('../utils/jwt.utils')

const router = Router()

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await Users.findOne({ email })

    if (!user)
      return res
        .status(400)
        .json({ status: 'error', error: "User and password don't match" })

    if (password !== user.password)
      return res
        .status(400)
        .json({ status: 'error', error: "User and password don't match" })

    const access_token = generateToken({ email })

    // res.status(200).json({
    //   status: 'success',
    //   message: 'Session initialized',
    //   token: access_token,
    // })

    res
      .cookie('authToken', access_token, { maxAge: 60000, httpOnly: true })
      .json({
        status: 'success',
        message: 'Session initialized',
      })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ status: 'error', error: 'Internal server error' })
  }
})

module.exports = router
