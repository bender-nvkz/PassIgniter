'use strict';

var gulp = require('gulp'),
	minify = require('gulp-minify'),
	$ = require('gulp-load-plugins')();

var src = {

	core: [
		'bower_components/jquery/dist/jquery.min.js',
		'bower_components/CanJS/can.jquery.js',
		'bower_components/CanJS/can.construct.super.js',
		'bower_components/CanJS/can.construct.proxy.js',
		'bower_components/CanJS/can.control.plugin.js'
	],

	vendor: [
		'bower_components/urijs/src/URI.min.js',
		'bower_components/bootstrap-stylus/js/transition.js',
		'bower_components/bootstrap-stylus/js/alert.js',
		'bower_components/bootstrap-stylus/js/button.js',
		//'bower_components/bootstrap-stylus/js/carousel.js',
		'bower_components/bootstrap-stylus/js/collapse.js',
		'bower_components/bootstrap-stylus/js/dropdown.js',
		'bower_components/bootstrap-stylus/js/modal.js',
		//'bower_components/bootstrap-stylus/js/tooltip.js',
		//'bower_components/bootstrap-stylus/js/popover.js',
		//'bower_components/bootstrap-stylus/js/scrollspy.js',
		'bower_components/bootstrap-stylus/js/tab.js',
		//'bower_components/bootstrap-stylus/js/affix.js'
	],

	main: [
		'src/js/main.js',
		'src/js/**/*.js'
	]
};

gulp.task('scripts-bower', function() {
	gulp.src(src.core)
		.pipe($.concat('core.js'))
		.pipe(minify({
			noSource: true,
			ext:{
				min:'.min.js'
			}
		}))
		.pipe(gulp.dest(gulp.destPath + '/js/'));

	gulp.src(src.vendor)
		.pipe($.concat('vendor.js'))
		.pipe(minify({
			noSource: true,
			ext:{
				min:'.min.js'
			}
		}))
		.pipe(gulp.dest(gulp.destPath + '/js/'));
});

gulp.task('scripts-main', function(sources) {
	sources = sources || false;

	return gulp.src(src.main)
		.pipe($.if(sources, $.sourcemaps.init()))
		.pipe($.concat('main.js'))
		.pipe($.if(sources, $.sourcemaps.write()))
		.pipe(minify({
			noSource: true,
			ext:{
				min:'.min.js'
			}
		}))
		.pipe(gulp.dest(gulp.destPath + '/js/'));
});