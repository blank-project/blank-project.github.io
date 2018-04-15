var express = require('express');
var app = express();

app.get('/', function(req, res, next) {
  console.log('Request');
  next();
}, function(req, res, next) {
  res.send('Hello World');
});

app.post('/login', function(req, res, next) {
  res.send('You cannot login for now');
});

app.listen(8080, function() {
  console.log('OK !');
});
