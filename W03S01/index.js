
const express = require('express')
const app = express()
const fs = require('fs');
const Regency = require('./routes/regancyRouter')
const Province = require('./routes/provinceRoutes')
app.use(express.json())

app.use('/regency', Regency)
app.use('/province', Province)

console.log("App running on port 3000 j")
app.listen(3000);
