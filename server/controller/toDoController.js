const asyncHandler = require('express-async-handler')
// get todos 
// route GET /api/todos
// access private
const getToDos = asyncHandler(
    async (req, res) => {
        res.status(200).json({message: 'get todos'})
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
        res.status(200).json({message: 'create todo'})
    }
) 

// update todo
// route PUT /api/todos/:id
// access private
const updateToDo = asyncHandler(async (req, res) => {
    res.status(200).json({message: `update todo #${req.params.id}`})
})

// delete todos 
// route DELETE /api/todos/:id
// access private
const deleteToDo = asyncHandler(async (req, res) => {
    res.status(200).json({message: `delete todo #${req.params.id}`})
})

module.exports = {
    getToDos,
    createToDo,
    updateToDo,
    deleteToDo
}