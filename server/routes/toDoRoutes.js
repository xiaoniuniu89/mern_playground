const express = require ('express')
const router = express.Router()
const { getToDos, createToDo, updateToDo, deleteToDo } = require('../controller/toDoController')

router.route('/').get(getToDos).post(createToDo)

router.route('/:id').put(updateToDo).delete(deleteToDo)

module.exports = router