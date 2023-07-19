const form = document.getElementById('forgotPasswordForm')

form.addEventListener('submit', e => {
  e.preventDefault()

  const data = new FormData(form)
  const obj = {}

  data.forEach((value, key) => (obj[key] = value))

  const url = '/auth/forgotPassword'
  const headers = {
    'Content-Type': 'application/json',
  }
  const method = 'PATCH'
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
