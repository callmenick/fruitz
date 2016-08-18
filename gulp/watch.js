const Gaze = require('gaze').Gaze;
const gulp = require('gulp');
const runSequence = require('run-sequence');

(() => {
  'use strict';

  const assets = [
    'src/images/**/*',
    'src/fonts/**/*'
  ];

  const styles = [
    'src/styles/**/*.styl'
  ];

  const scripts = [
    'gulpfile.js',
    'gulp/**/*.js',
    'app.js',
    'app/**/*.js',
    'src/scripts/*.js',
    'src/scripts/components/**/*.js'
  ];

  /**
   * Watch assets, to be used only during development.
   */
  gulp.task('watch:assets', () => {
    const gaze = new Gaze(assets);

    gaze.on('ready', watcher => {
      watcher.on('all', () => {
        runSequence('assets:development');
      });
    });
  });

  /**
   * Watch styles, to be used only during development.
   */
  gulp.task('watch:styles', () => {
    const gaze = new Gaze(styles);

    gaze.on('ready', watcher => {
      watcher.on('all', () => {
        runSequence('styles:development');
      });
    });
  });

  /**
   * Watch styles, to be used only during development.
   */
  gulp.task('watch:scripts', () => {
    const gaze = new Gaze(scripts);

    gaze.on('ready', watcher => {
      watcher.on('all', () => {
        runSequence('lint', 'scripts:development');
      });
    });
  });

  /**
   * Watch task, to be used only during development.
   */
  gulp.task('watch', ['watch:assets', 'watch:styles', 'watch:scripts']);
})();
