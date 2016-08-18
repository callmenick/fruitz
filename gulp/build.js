const gulp = require('gulp');
const runSequence = require('run-sequence');

(() => {
  'use strict';

  const asyncSequence = [
    'scripts:production',
    'styles:production',
    'assets:production'
  ];

  /**
   * Build for staging task, builds a production ready version of the app.
   */
  gulp.task('build:staging', done => {
    runSequence('clean', asyncSequence, 'inject', err => {
      err ? process.exit(1) : done();
    });
  });

  /**
   * Build for production task, builds a production ready version of the app.
   */
  gulp.task('build:production', done => {
    runSequence('clean', asyncSequence, 'inject', err => {
      err ? process.exit(1) : done();
    });
  });
})();
