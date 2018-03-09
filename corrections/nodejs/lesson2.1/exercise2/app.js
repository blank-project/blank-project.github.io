var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');

var staticDir  = path.join(__dirname, 'static');

console.log(staticDir);

app.use(logger('dev'));
app.use(express.static(staticDir));



app.get('/', function(req, res, next) {
  var date = new Date(), response = '';
  response += '<html>';
  response += '<head><title>hello</title>';
  response += '<link rel="stylesheet" href="css/style.css" />';
  response += '</head>';
  response += '<body>';
  response += 'Il est : ';
  response += date;
  response += '<script src="js/script.js"></script>';
  response += '</body>';
  response += '</html>';
  res.send(response);
});

app.listen(5000);
