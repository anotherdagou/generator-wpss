var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var config = require('./config').javascript;

gulp.task('javascript', function() {
    var b = browserify({
        entries: config.src,
        debug: true
    });

    return b.bundle()
        .pipe(source('front-enqueue-js.min.js'))
        .pipe(buffer())
        .on("error", notify.onError(function(error) {
            return error.message;
        }))
        .pipe(gulp.dest(config.dest));
});