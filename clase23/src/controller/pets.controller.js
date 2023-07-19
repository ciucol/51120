const { Router } = require('express')

const router = Router()
const pets = []

router.param('pet', (req, res, next, pet) => {
  const regex = /^[a-zA-Z\s]+$/

  if (regex.test(pet)) {
    req.pet = pets.find(pet => pet.name === req.params.pet)
    return next()
  }

  res.json({ error: 'No cumple con los criterios de nombre de mascota' })
})

router.get('/', (req, res) => {
  res.json({ message: pets })
})

router.get('/:pet', (req, res) => {
  res.json({ message: req.pet })
})

router.post('/', (req, res) => {
  const { name, specie } = req.body

  const newPetInfo = {
    name,
    specie,
  }

  pets.push(newPetInfo)

  res.json({ message: newPetInfo })
})

router.put('/:pet', (req, res) => {
  req.pet.adopted = true
  res.json({ message: req.pet })
})

module.exports = router
