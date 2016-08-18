const gutil = require('gulp-util');

module.exports.errorHandler = function(title) {
  'use strict';

  return (err) => {
    gutil.log(gutil.colors.red('[' + title + ']'), err.message.toString());
  };
};
