const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/contact', function (req, res) {
    res.send('contakt')
})

app.get('/product', function (req, res) {
    res.send('product')
})

app.listen(3000)