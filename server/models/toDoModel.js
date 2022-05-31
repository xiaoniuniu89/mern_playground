const mongoose = require('mongoose')
const toDoSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a value'],
    }

}, {timestamps: true})

module.exports = mongoose.model('todo', toDoSchema)