const count = require('./components/count.js');

(function() {
  'use strict';

  console.log('counter.js loaded with count custom module required commonjs style.');

  const $button = document.querySelector('.js-count-button');
  const $output = document.querySelector('.js-count-output');
  const $goat = document.querySelector('.js-count-goat');

  count($button, $output, $goat);
})();
