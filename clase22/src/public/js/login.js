const form = document.getElementById('formLogin')

form.addEventListener('submit', e => {
  e.preventDefault()

  const data = new FormData(form)
  const obj = {}

  data.forEach((value, key) => (obj[key] = value))

  fetch('/auth', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(obj),
  })
    .then(response => response.json())
    // .then(data => localStorage.setItem('authToken', data.token))
    .catch(error => console.log(error))
})
