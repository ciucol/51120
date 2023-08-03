const Stripe = require('stripe')

class PaymentService {
  constructor() {
    this.stripe = new Stripe(
      'sk_test_51Nap4qB3dl12v1XVFEK0JbbsCLj52rhGcriMngrVsgu5BWcAeyYZVDRQ1QB7oyaYVNt0fCEMunt5p3YVi8J6HAoc00oIAHyOfy'
    )
  }

  async createPaymentIntent(data) {
    return await this.stripe.paymentIntents.create(data)
  }
}

module.exports = PaymentService
