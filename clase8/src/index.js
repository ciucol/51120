const express = require('express');

const port = 3000;
const users = [];
let products = [];

const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
  res.json({ message: users });
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;

  const user = users[id - 1];

  res.send({ message: user });
});

app.post('/users', (req, res) => {
  const { name } = req.body;

  users.push(name);

  res.status(201).json({ message: 'Usuario creado' });
});

app.get('/products', (req, res) => {
  res.json({ message: products });
});

app.post('/products', (req, res) => {
  const { name, price } = req.body;

  const newProductInfo = {
    name,
    price,
  };

  products.push(newProductInfo);

  res.status(201).json({ message: 'Product creado' });
});

app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  products.splice(id - 1, 1);

  products = products.filter((product, index) => index !== id);
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
