const name = document.getElementById('name')
const email = document.getElementById('email')

const getCookiesButton = document.getElementById('getCookies')
const setCookiesButton = document.getElementById('setCookie')

getCookiesButton.addEventListener('click', () => {
  fetch('/cookies/get')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
})

setCookiesButton.addEventListener('click', () => {
  const url = '/cookies/set'
  const headers = {
    'Content-Type': 'application/json',
  }
  const method = 'POST'

  const user = {
    [name.value]: email.value,
  }
  const body = JSON.stringify(user)

  fetch(url, {
    headers,
    method,
    body,
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
})
