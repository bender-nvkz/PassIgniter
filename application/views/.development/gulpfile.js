'use strict';

var gulp = require('gulp-param')(require('gulp'), process.argv),
	requireDir = require('require-dir'),
	sequence = require('run-sequence');

gulp.destPath = '../../../assets';

requireDir('./tasks', { recurse: true });

var buildCommands = [
	['bootstrap-stylus-copy'],
	['styles-main', 'scripts-bower', 'scripts-main']
];

gulp.task('default', function () {
	return sequence.apply(this, buildCommands);
});
