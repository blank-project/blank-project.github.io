var gulp = require('gulp');
var include = require('gulp-file-include');
var changed = require('gulp-changed');

var DEST = './build/';

gulp.task('includes', function() {
    gulp.src('./pages/*.html')
    .pipe(include({
      prefix: '@@',
      basepath: './fragments'
    }))
    .pipe(gulp.dest(DEST));
});
