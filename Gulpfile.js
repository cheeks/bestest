//  gulp + plugins
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean');

//  local server + livereload
var embedlr = require('gulp-embedlr'),
    refresh = require('gulp-livereload'),
    lrserver = require('tiny-lr')(),
    express = require('express'),
    livereload = require('connect-livereload'),
    livereloadport = 35729,
    serverport = 5000;

gulp.task('lint', function () {
  gulp.src('./app/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('browserify', function () {
  gulp.src(['app/scripts/main.js'])
    .pipe(browserify({
      insertGlobals: false,
      debug: true
    }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(refresh(lrserver));
});

gulp.task('views', function () {
  gulp.src('app/index.html')
    .pipe(gulp.dest('dist/'))
    .pipe(refresh(lrserver));
  gulp.src('./app/views/**/*')
    .pipe(gulp.dest('dist/views/'))
    .pipe(refresh(lrserver));
});

// setup server
var server = express();
server.use(livereload({port: livereloadport}));
// set root directory
server.use(express.static('./dist'));;
server.all('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist' });
});

// build tasks
gulp.task('watch', ['lint'], function () {
  gulp.watch(['app/scripts/*.js', 'app/scripts/**/*.js'], [
    'lint',
    'browserify'
  ]);
  gulp.watch(['app/index.html', 'app/views/**/*.html'], [
    'views'
  ]);
});



// dev server / watch task
gulp.task('dev', ['watch'], function () {
  // start webserver
  server.listen(serverport);
  // start livereload server
  lrserver.listen(livereloadport);
});
