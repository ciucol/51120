const { Router } = require('express')

const router = Router()

const dictionary = {
  param: 'Valor que viene en la url después del signo /',
  query: 'Valor que viene en la url en formato clave valor después del signo ?',
  body: 'Conjunto de valores que viene en el cuerpo de la petición, tipicamente en formato JSON',
}

router.param('word', (req, res, next, word) => {
  for (let dictionaryWord in dictionary) {
    if (dictionaryWord === word) {
      req.word = dictionary[dictionaryWord]
    }
  }

  if (!req.word) {
    req.word = null
  }

  next()
})

router.get('/:word([a-zA-Z]+)', (req, res) => {
  res.json({ message: req.params.word })
})

router.get('/:word([a-zA-Z]+)/:language', (req, res) => {
  res.json({ message: req.params.word })
})

router.put('/:word([a-zA-Z]+)', (req, res) => {
  res.json({ message: req.params.word })
})

router.delete('/:word([a-zA-Z]+)', (req, res) => {
  res.json({ message: req.params.word })
})

module.exports = router
