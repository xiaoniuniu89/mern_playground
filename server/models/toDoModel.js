const mongoose = require('mongoose')
const toDoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    text: {
        type: String,
        required: [true, 'Please add a value'],
    }

}, {timestamps: true})

module.exports = mongoose.model('todo', toDoSchema)