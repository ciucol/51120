const peticion = () => {
  fetch('http://localhost:3000/test')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => error)
}
