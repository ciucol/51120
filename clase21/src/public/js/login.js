const form = document.getElementById('loginForm')

form.addEventListener('submit', e => {
  e.preventDefault()

  const data = new FormData(form)
  const obj = {}

  data.forEach((value, key) => (obj[key] = value))

  const url = '/auth'
  const headers = {
    'Content-type': 'application/json',
  }
  const method = 'POST'
  const body = JSON.stringify(obj)

  fetch(url, {
    headers,
    method,
    body,
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
})
