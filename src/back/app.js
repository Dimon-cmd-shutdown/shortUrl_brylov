const express = require('express')
const app = express()
require('./db/mongoose')
const path = require('path')
const shortUrlRouter = require('./routers/shortUrl-router')

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(path.join(__dirname, '../front')))
app.use(shortUrlRouter)

module.exports = app