'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

var sass_src = './wp-content/themes/divi-child/assets/sass/style.scss';
var css_destination = './wp-content/themes/divi-child/';

var sass_watched = './wp-content/themes/divi-child/assets/sass/**/*.scss';

gulp.task('default', function () {
    return gulp.src(sass_src)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(css_destination))
        ;
});

gulp.task('watch', function () {
    gulp.watch(sass_watched, ['default']);
});