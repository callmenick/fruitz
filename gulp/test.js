const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

(() => {
  'use strict';

  const lintScripts = [
    'gulpfile.js',
    'gulp/**/*.js',
    'app.js',
    'app/**/*.js',
    'src/scripts/**/*.js',
    '!src/scripts/vendor/**/*.js'
  ];

  /**
   * Lint task.
   */
  gulp.task('lint', () => {
    return gulp.src(lintScripts)
      .pipe($.eslint())
      .pipe($.eslint.format());
  });
})();
