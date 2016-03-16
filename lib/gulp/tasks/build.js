"use strict";

var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('bundle', ['scripts', 'sass', 'images', 'jade', 'copy'], function() {
  if (devBuild)
      global.doBeep = true;
    gulp.start('reload');
});

gulp.task('reload', function() {
    livereload.listen();
    gulp.watch('./public/css/*.css').on('change', livereload.changed);
    gulp.watch('./public/*.html').on('change', livereload.changed);
    gulp.watch('./public/js/**/*.js').on('change', livereload.changed);
});


gulp.task('build', ['clean', 'lint'], function() {
    gulp.start('bundle');
});
