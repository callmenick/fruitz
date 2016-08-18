const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const gulp = require('gulp');
const util = require('./util.js');
const $ = require('gulp-load-plugins')();

(() => {
  'use strict';

  /**
   * Styles task used during development.
   */
  gulp.task('styles:development', () => {
    const processors = [autoprefixer()];

    return gulp.src(['src/styles/style.styl'])
      .pipe($.sourcemaps.init())
        .pipe($.stylus())
        .on('error', util.errorHandler('Stylus error'))
        .pipe($.postcss(processors))
      .pipe($.sourcemaps.write('../maps'))
      .pipe(gulp.dest('.tmp/css'));
  });

  /**
   * Styles task used during production.
   */
  gulp.task('styles:production', () => {
    const processors = [autoprefixer(), cssnano()];

    return gulp.src(['src/styles/style.styl'])
      .pipe($.sourcemaps.init())
        .pipe($.stylus())
        .on('error', util.errorHandler('Stylus error'))
        .pipe($.postcss(processors))
      .pipe($.rev())
      .pipe($.sourcemaps.write('../maps'))
      .pipe(gulp.dest('dist/css'));
  });
})();
