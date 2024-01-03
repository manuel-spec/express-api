const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const api = require('./router/api')
const user = require('./router/users')
const app = express()
const PORT = 3000
const db_uri = "mongodb://localhost/" + process.env.DATABASE_NAME

mongoose.connect(db_uri)
    .then((result) => console.log("DATABASE CONNECTION ESTABLISHED !"))
    .catch((error) => console.log(error))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', api)
app.use('/users', user)


app.listen(3000, () => console.log(`listening on port ${PORT}`))