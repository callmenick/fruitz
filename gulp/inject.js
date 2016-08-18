const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

(() => {
  'use strict';

  /**
   * Inject task.
   * @todo Programatically inject these sources from an array.
   */
  gulp.task('inject', () => {
    return gulp.src(['src/views/**/*.pug'])
      .pipe($.inject(gulp.src('dist/css/**/*.css', {read: false}), {ignorePath: 'dist'}))
      .pipe($.inject(gulp.src('dist/js/main-*.js', {read: false}), {ignorePath: 'dist', name: 'main'}))
      .pipe(gulp.dest('dist/views'));
  });
})();
