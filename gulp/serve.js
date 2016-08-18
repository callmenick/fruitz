const gulp = require('gulp');
const runSequence = require('run-sequence');
const $ = require('gulp-load-plugins')();

(() => {
  'use strict';

  const asyncSequence = [
    'scripts:development',
    'styles:development',
    'assets:development'
  ];

  /**
   * Serve task for development, nodemon watching the app.
   */
  gulp.task('serve', done => {
    runSequence('clean', asyncSequence, 'watch', 'lint', () => {
      $.nodemon({
        script: 'app.js'
      });
      done();
    });
  });
})();
