const fs = require('fs-extra');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const util = require('./util.js');
const $ = require('gulp-load-plugins')();

(() => {
  'use strict';

  /**
   * Fonts task for development
   */
  gulp.task('fonts:development', done => {
    fs.copy('src/fonts', '.tmp/fonts', err => {
      if (err) {
        util.errorHandler('Fonts error')({
          message: 'Error copying fonts'
        });
      } else {
        done();
      }
    });
  });

  /**
   * Fonts task for production
   */
  gulp.task('fonts:production', done => {
    fs.copy('src/fonts', 'dist/fonts', err => {
      if (err) {
        util.errorHandler('Fonts error')({
          message: 'Error copying fonts'
        });
      } else {
        done();
      }
    });
  });

  /**
   * Images development task
   */
  gulp.task('images:development', () => {
    const options = {
      progressive: true,
      svgoPlugins: [{removeViewBox: false}]
    };

    return gulp.src('src/images/**/*')
      .pipe($.imagemin(options))
      .on('error', util.errorHandler('Images error'))
      .pipe(gulp.dest('.tmp/img'));
  });

  /**
   * Images production task
   */
  gulp.task('images:production', () => {
    const options = {
      progressive: true,
      svgoPlugins: [{removeViewBox: false}]
    };

    return gulp.src('src/images/**/*')
      .pipe($.imagemin(options))
      .on('error', util.errorHandler('Images error'))
      .pipe(gulp.dest('dist/img'));
  });

  /**
   * Assets task for development
   */
  gulp.task('assets:development', done => {
    runSequence('fonts:development', 'images:development', () => {
      done();
    });
  });

  /**
   * Assets task for production
   */
  gulp.task('assets:production', done => {
    runSequence('fonts:production', 'images:production', () => {
      done();
    });
  });
})();
