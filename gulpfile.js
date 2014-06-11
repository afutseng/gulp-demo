//gulpfile.js
var gulp = require('gulp'),
    phpunit = require('gulp-phpunit'),
    mocha = require('gulp-mocha');

gulp.task('phpunit', function() {
    var options = {debug: true, notify: true};
    gulp.src('test/**/*.php')
        .pipe(phpunit('/usr/local/bin/phpunit', options))
});

gulp.task('mocha', function() {
    var options = {debug: true, notify: true};
    gulp.src('test/**/*.js')
        .pipe(mocha());
});

gulp.task('default', function(){
    gulp.watch('test/**/*.php', { debounceDelay: 2000, emit: 'one', verbose: true }, ['phpunit']);
    gulp.watch('test/**/*.js', { debounceDelay: 2000, emit: 'one', verbose: true }, ['mocha']);
});