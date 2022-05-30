const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT



// middleware 
app.use('/api/todos', require('./routes/toDoRoutes'))

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})