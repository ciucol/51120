const paymentsController = require('../controllers/payment.controller')

const router = app => {
  app.use('/api/payments', paymentsController)
}

module.exports = router
