var gulp = require('gulp');
var util = require('gulp-util');
var static = require('node-static');
var argv = require('yargs').argv;
var http = require('http');

const DEST = './build/';
const COURSES = './';
const DEFAULT_PORT = 8080;

// TODO Find if and how to stop server.
gulp.task('serve', function() {
  var file = new static.Server(COURSES), port = parseInt(argv.port) || DEFAULT_PORT, server;

  gulp.on('end', function() {
    util.log('Shutting down Server');
    server.close()
  });

  server = http.createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
  });

  server.listen(port);
  util.log('Server running on port ' + port);

});
