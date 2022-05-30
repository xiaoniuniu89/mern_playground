const express = require('express')
const app = express()
require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')

const port = process.env.PORT

// middleware 
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/todos', require('./routes/toDoRoutes'))

app.use(errorHandler)



// run server
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})