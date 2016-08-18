const babelify = require('babelify');
const browserify = require('browserify');
const es = require('event-stream');
const glob = require('glob');
const gulp = require('gulp');
const path = require('path');
const source = require('vinyl-source-stream');
const util = require('./util.js');
const $ = require('gulp-load-plugins')();

(() => {
  'use strict';

  /**
   * The scripts task for development.
   */
  gulp.task('scripts:development', done => {
    glob('src/scripts/*.js', (err, files) => {
      if (err) done(err);

      const tasks = files.map(file => {
        return browserify(file)
          .transform(babelify, {
            presets: ['es2015']
          })
          .bundle()
          .on('error', function(err) {
            util.errorHandler('JS Compile error')(err);
            this.emit('end');
          })
          .pipe(source(path.basename(file)))
          .pipe($.streamify($.sourcemaps.init()))
          .pipe($.streamify($.sourcemaps.write('../maps')))
          .pipe(gulp.dest('.tmp/js'));
      });

      es.merge(tasks).on('end', done);
    });
  });

  /**
   * The scripts task for production.
   */
  gulp.task('scripts:production', done => {
    glob('src/scripts/*.js', (err, files) => {
      if (err) done(err);

      const tasks = files.map(file => {
        return browserify(file)
          .transform(babelify, {
            presets: ['es2015']
          })
          .bundle()
          .on('error', function(err) {
            util.errorHandler('JS Compile error')(err);
            this.emit('end');
          })
          .pipe(source(path.basename(file)))
          .pipe($.streamify($.sourcemaps.init()))
          .pipe($.streamify($.rev()))
          .pipe($.streamify($.uglify()))
          .pipe($.streamify($.sourcemaps.write('../maps')))
          .pipe(gulp.dest('dist/js'));
      });

      es.merge(tasks).on('end', done);
    });
  });
})();
