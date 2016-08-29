'use strict';

var gulp = require('gulp'),
	streamqueue = require('streamqueue'),
	bless = require('gulp-bless'),
	cleanCSS = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	$ = require('gulp-load-plugins')();

gulp.task('styles-main', function (sources) {
	sources = sources || false;

	return gulp.src('src/stylus/main.styl')
		.pipe(rename({suffix: '.min'}))
		.pipe($.plumber())
		.pipe($.if(sources, $.sourcemaps.init()))
		.pipe($.stylus())
		.pipe($.autoprefixer(['last 2 versions', 'Explorer > 8']))
		.pipe(bless())
		.pipe(cleanCSS({compatibility: 'ie9', processImport: false}))
		.pipe($.if(sources, $.sourcemaps.write()))
		.pipe(gulp.dest(gulp.destPath + '/css/'));
});
