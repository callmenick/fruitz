const _ = require('lodash');

(function() {
  'use strict';

  console.log('main.js loaded with lodash imported.');

  const a = [1, 2, 3, 4, 5];
  const b = [6, 7, 8, 9, 10];
  const c = _.concat(a, b);

  console.log('concat:', c);
})();
