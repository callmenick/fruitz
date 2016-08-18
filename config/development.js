'use strict';

const path = require('path');
const pkg = require('../package.json');
const port = process.env.PORT || 3000;

module.exports = {
  env: 'development',
  port: port,
  version: pkg.version,
  viewsPath: path.resolve(__dirname, '../src/views'),
  staticPath: path.resolve(__dirname, '../.tmp'),
  faviconPath: path.resolve(__dirname, '../.tmp/img/icons/favicon.ico')
};
