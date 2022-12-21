const express = require('express')
const Router = require('./routes')
const app = express()

app.use(express.json())

app.use(Router)

console.log("App running on port 3000")

app.listen(3000)