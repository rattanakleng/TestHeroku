var express = require('express')
var app = express()

var PORT = process.env.PORT || 3001;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(PORT);