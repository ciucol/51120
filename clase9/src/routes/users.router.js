const { Router } = require('express');

const users = [];

const router = Router();

router.get('/:id', (req, res) => {
  res.json({ message: users });
});

router.post('/', (req, res) => {
  const { user } = req.body;
  users.push(user);

  res.json({ message: 'Usuario creado' });
});

module.exports = router;
