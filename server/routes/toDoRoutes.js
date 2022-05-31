const express = require ('express')
const router = express.Router()
const { getToDos, createToDo, updateToDo, deleteToDo } = require('../controller/toDoController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getToDos).post(protect, createToDo)

router.route('/:id').put(protect, updateToDo).delete(protect, deleteToDo)

module.exports = router