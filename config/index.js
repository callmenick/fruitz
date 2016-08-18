'use strict';

module.exports = (function(env) {
  let path = `./${env}.js`;
  let config = require(path);

  return config;
})(process.env.NODE_ENV || 'development');
