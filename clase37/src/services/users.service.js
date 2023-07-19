const create = async newUserInfo => {
  const newUser = UsersDAO.create(newUserInfo)
  const coupon = createCoupon(newUser._id)
  await sendEmail(newUser, coupon)
  return 'Usuario creado'
}

const createCoupon = async id => {
  const products = ProductDAO.get({ price: { $teq: 100 } })
  const product = getRandomProduct(products)
  product.price = product.price * (1 - 0.4)
  const coupon = {
    title: 'Mi Cupón',
    product: product,
    discount: 0.4,
    user: id,
  }
  await storeCoupon()

  return coupon
}

const storeCoupon = async couponInfo => {
  return await CouponsDAO.create(couponInfo)
}

const getRandomProduct = products => {
  const numberRandom = Math.random()
  return products[numberRandom]
}

const sendMail = (userInfo, coupon) => {
  //subject, body, html, send
  return
}

module.exports = {
  create,
}
