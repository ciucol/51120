const fs = require('fs')
const { Router } = require('express')
const uploader = require('../utils/multer.utils')
const FileManager = require('../dao/FileManager.dao')
const BooksDao = require('../dao/Books.dao')

const router = Router()
const fileManager = new FileManager()
const Books = new BooksDao()

router.get('/loadItems', async (req, res) => {
  try {
    const books = await fileManager.loadItems()

    const newBooks = await Books.insertMany(books)

    res.json({ message: newBooks })
  } catch (error) {
    res.json({ error })
  }
})

router.get('/', async (req, res) => {
  try {
    const books = await Books.findAll()
    res.json({ message: books })
  } catch (error) {
    res.json({ error })
  }
})

router.post('/', uploader.single('file'), async (req, res) => {
  try {
    const { title, author, description, year } = req.body
    const newBookInfo = {
      title,
      author,
      description,
      year,
      image: req.file.filename,
    }

    const newBook = await Books.create(newBookInfo)
    res.json({ message: newBook })
  } catch (error) {
    res.json({ error })
  }
})

router.delete('/deleteAll', async (req, res) => {
  await Books.deleteAll()
  res.json({ message: 'Delete all' })
})

module.exports = router
