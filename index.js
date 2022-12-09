const express = require('express')
const app = express()
const router = require('./routers')


app.use(express.json())

app.use(router)

console.log("App running on port 3000")

app.listen(3000)