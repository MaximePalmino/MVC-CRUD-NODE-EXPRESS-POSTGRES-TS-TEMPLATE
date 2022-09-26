const express = require('express')
const app = express() 
const cors = require('cors')
const getAllUsers = require('./routes/Project')

// MIDDLEWARE
app.use(cors())
app.use(express.json()) //req.body


app.use('/', require('./routes/Project'))


app.listen(3000, () => {
    console.log(`The server listen on port 3000`)
})