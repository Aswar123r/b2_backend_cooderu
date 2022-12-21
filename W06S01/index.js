const express = require('express')
const {config} = require('dotenv').config()
const Router = require('./routers')
const app = express()

app.use(express.json())

app.use('/api', Router)

console.log(`App running on port ${process.env.PORT}`)

app.listen(process.env.PORT)