const express = require('express')
const app = express()

app.get('/:name', function (req, res) {
  res.send('Hello ' +req.params.name)
})
app.get('/about', function (req, res) {
  res.send('annan in about')
})
app.get('/login', function (req, res) {
  res.send('annan in login')
})
app.get('/gallery', function (req, res) {
  res.send('<b>gallery<b>')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})