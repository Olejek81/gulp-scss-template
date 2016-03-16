/**
 * Created by hardy on 16.03.2016.
 */
"use strict";

var gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    prefix     = require('gulp-autoprefixer'),
    compress   = require('gulp-minify-css'),
    gulpif     = require('gulp-if'),
    sourcemaps = require('gulp-sourcemaps'),
    rename     = require('gulp-rename'),
    config     = require('../config').sass;


gulp.task('sass', function(cb) {
    return (
        gulp.src('src/sass/**/*.scss')
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(prefix(config.autoprefixer))
            .pipe(gulpif(true, compress()))
            .pipe(gulpif(true, rename({suffix: '.min'})))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('public/css'))
    );
});
