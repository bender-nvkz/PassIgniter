'use strict';

var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

gulp.task('bootstrap-stylus-copy', function () {
	gulp.src(['bower_components/bootstrap-stylus/bootstrap/**/*'])
		.pipe($.newer('src/bootstrap'))
		.pipe(gulp.dest('src/stylus/bootstrap'));
});