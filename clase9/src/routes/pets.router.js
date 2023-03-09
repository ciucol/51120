const { Router } = require('express');
const uploader = require('../utils');

const pets = [];

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: pets });
});

router.post('/', uploader.single('file'), (req, res) => {
  if (!req.file) return res.json({ error: 'No se pudo cargar el archivo' });
  const pet = req.body;
  pet.thumbnail = req.file.path;
  pets.push(pet);

  res.json({ message: 'Mascota creada' });
});

module.exports = router;
