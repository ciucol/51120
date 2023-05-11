const { Router } = require('express')
const { verifyToken } = require('../utils/jwt.util')

class CustomRouter {
  constructor() {
    this.router = Router()
    this.init()
  }

  init() {}

  getRouter() {
    return this.router
  }

  get(path, policies, ...callbacks) {
    this.router.get(
      path,
      this.handlePolicies(policies),
      this.generateCustomResponses,
      this.applyCallbacks(callbacks)
    )
  }

  put(path, policies, ...callbacks) {
    this.router.put(
      path,
      this.handlePolicies(policies),
      this.generateCustomResponses,
      this.applyCallbacks(callbacks)
    )
  }

  post(path, policies, ...callbacks) {
    this.router.post(
      path,
      this.handlePolicies(policies),
      this.generateCustomResponses,
      this.applyCallbacks(callbacks)
    )
  }

  applyCallbacks(callbacks) {
    return callbacks.map(callback => async (...params) => {
      try {
        await callback.apply(this, params)
      } catch (error) {
        console.log(error)
        params[1].status(500).json({ error })
      }
    })
  }

  generateCustomResponses(req, res, next) {
    res.sendSuccess = message =>
      res.status(200).json({ status: 'success', message })
    res.sendCreatedSuccess = message =>
      res.status(201).json({ status: 'success', message })
    res.sendServerError = error =>
      res.status(500).json({ status: 'error', error })
    res.sendUserError = error =>
      res.status(400).json({ status: 'error', error })

    next()
  }

  handlePolicies(policies) {
    return (req, res, next) => {
      if (policies.includes('PUBLIC')) return next()

      const authHeaders = req.headers.authorization
      if (!authHeaders)
        return res.status(401).json({ error: 'Not authenticated' })

      const token = authHeaders.split(' ')[1]
      const user = verifyToken(token)

      if (!policies.includes(user.role.toUpperCase()))
        return res.status(403).json({ error: 'Not authorized' })

      req.user = user
      next()
    }
  }
}

module.exports = CustomRouter
