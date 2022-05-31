const todo = require('../models/toDoModel')

const asyncHandler = require('express-async-handler')



// get todos 
// route GET /api/todos
// access private
const getToDos = asyncHandler(
    async (req, res) => {
        const todos = await todo.find()
        res.status(200).json(todos)
    }
) 

// create todo
// route POST /api/todos
// access private
const createToDo = asyncHandler(
    async (req, res) => {
        if(!req.body.text){
            res.status(400)
            throw new Error('Please add a text field!')
        }
        const toDo = await todo.create(req.body)
        res.status(200).json(toDo)
    }
) 

// update todo
// route PUT /api/todos/:id
// access private
const updateToDo = asyncHandler(async (req, res) => {
    const toDo = await todo.findById(req.params.id)
    if(!toDo){
        res.status(400)
        throw new Error('Todo not found')
    }
    const updatedToDo = await todo.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedToDo)
})

// delete todos 
// route DELETE /api/todos/:id
// access private
const deleteToDo = asyncHandler(async (req, res) => {
    const toDo = await todo.findById(req.params.id)
    if(!toDo){
        res.status(400)
        throw new Error('Todo not found')
    }
    const deletedToDo = await(todo.findByIdAndDelete(req.params.id))
    res.status(200).json(deletedToDo)
})

module.exports = {
    getToDos,
    createToDo,
    updateToDo,
    deleteToDo
}