var fs = require('fs');
var express = require('express');
var app = express();
var port = 3000;
var path = require('path');

app.use('/images', express.static('images'));
app.use('/public', express.static('public'));

// ALLOW CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  var files = fs.readdirSync(__dirname + '/images');

  for (var i = 0; i < files.length; i++) {
    files[i] = "http://" + path.join(req.headers.host,"images",files[i]);
  }

  res.send(files);
});

app.listen(port, function() {
  console.log('listening ...');
});
