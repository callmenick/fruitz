/* =============================================================================
    NAME       : gulpfile.js
    AUTHOR     : Axiom Zen
    TAB SIZE   : 2
    SOFT TABS  : YES
    LICENSE    : MIT
============================================================================= */

const fs = require('fs-extra');
const gulp = require('gulp');

(function() {
  'use strict';

  /**
   * This will load all js or coffee files in the gulp directory in order to
   * load all gulp tasks.
   */
  fs.readdirSync('gulp').filter(file => {
    return (/\.(js|coffee)$/i).test(file);
  }).map(file => {
    require(`./gulp/${file}`);
  });

  /**
   * Default task, builds the project.
   */
  gulp.task('default', ['build']);
})();
