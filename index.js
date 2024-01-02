const express = require('express')
const mongoose = require('mongoose')


const api = require('./router/api')

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', api)


app.listen(3000, () => console.log(`listening on port ${PORT}`))