const { Router } = require('express')
const PaymentService = require('../services/payment.service')
const CURRENCIES = require('../commons/constants/currencies.constants')

const router = Router()

const products = [
  { id: 1, name: 'papas', price: 1000 },
  { id: 2, name: 'queso', price: 500 },
  { id: 3, name: 'hamburguesa', price: 1500 },
  { id: 4, name: 'soda', price: 1000 },
  { id: 5, name: 'golosinas', price: 800 },
]

router.post('/payment-intents', async (req, res) => {
  try {
    console.log('hizo la query')
    const { id } = req.query
    const productRequested = products.find(product => product.id === Number(id))
    if (!productRequested)
      return res
        .status(HTTTP_STATUS_CODES.NOT_FOUND)
        .json({ error: 'Product not found' })

    const paymentIntentInfo = {
      amount: productRequested.price,
      currency: CURRENCIES.USD,
      metadata: {
        userId: 'cy87wjd98jxdh82',
        orderDetails: JSON.stringify(productRequested),
        address: 'Av. siempre viva 123',
      },
    }
    const service = new PaymentService()
    const result = await service.createPaymentIntent(paymentIntentInfo)

    console.log(result)

    res.json({ status: 'success', payload: result })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
