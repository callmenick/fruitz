const fs = require('fs-extra');
const gulp = require('gulp');
const util = require('./util.js');

(() => {
  'use strict';

  function clean(dir) {
    return new Promise((resolve, reject) => {
      fs.remove(dir, err => {
        if (err) reject();

        fs.mkdirs(dir, err => {
          err ? reject() : resolve();
        });
      });
    });
  }

  /**
   * Clean task, cleans all dirs.
   */
  gulp.task('clean', done => {
    Promise.all([clean('.tmp'), clean('dist')])
      .then(() => {
        done();
      })
      .catch(() => {
        util.errorHandler('Clean error')({
          message: 'Error cleaning'
        });
      });
  });
})();
