// ------------------------- Imports ---------------------------------------------------------------

var gulp = require('gulp'),
    rigger = require('rigger'),
    concat = require('gulp-concat'),
    browser = require('browser-sync'),
    watch = require('gulp-watch');

// -------------------------------------------------------------------------------------------------


// ------------------------- Build up library (dev) ------------------------------------------------

gulp.task('dev-build', function() {
    return gulp.src('../sources/visibility.js')
        .pipe(rigger())
        .pipe(gulp.dest('./output/dev'))
        .pipe(borowser.reload());
});

// -------------------------------------------------------------------------------------------------


// -------------------------- Watching for changes in dev ------------------------------------------

gulp.task('dev-watch', function() {
    watch(['../sources/scripts/**/*'], function(evt, cb) {
        gulp.start('dev-build-scripts');
    });

    watch(['../sources/styles/**/*'], function(evt, cb) {
        gulp.start('dev-build-styles');
    });
});

// -------------------------------------------------------------------------------------------------


// --------------------------- Dev web server ------------------------------------------------------

gulp.task('dev-server', function() {
    browser({
        server: { baseDir: '../output/dev' },
        tunnel: true,
        host: 'localhost',
        port: 5001,
        logPrefix: 'conversator.web.app'
});

// -------------------------------------------------------------------------------------------------


// ---------------------------- Dev cleanup --------------------------------------------------------

gulp.task('dev-cleanup', function (cb) {
    rimraf('./output/dev', cb);
});

// -------------------------------------------------------------------------------------------------


// ------------------------ Build dev environment task ---------------------------------------------

gulp.task('dev-build', [
    'dev-cleanup',
    'dev-build-scripts',
]);

// -------------------------------------------------------------------------------------------------


// -------------------------------- Run dev task ---------------------------------------------------

gulp.task('dev', ['dev-build', 'dev-server', 'dev-watch']);

// -------------------------------------------------------------------------------------------------