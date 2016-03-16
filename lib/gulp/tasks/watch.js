"use strict";

var gulp   = require('gulp'),
    finder = require('../helpers/finder'),
    config = require('../config');

gulp.task('watching', function() {
    global.isWatching = true;
});


gulp.task('watch', ['watching', 'build'], function() {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
    gulp.watch(finder(config.images.src), ['images']);
    gulp.watch(finder(config.jade.src), ['jade']);
});
