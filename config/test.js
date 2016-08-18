'use strict';

const path = require('path');
const pkg = require('../package.json');
const port = process.env.PORT || 3000;

module.exports = {
  env: 'test',
  port: port,
  version: pkg.version,
  viewsPath: path.resolve(__dirname, '../src/views'),
  staticPath: path.resolve(__dirname, '../src'),
  faviconPath: path.resolve(__dirname, '../src/images/icons/favicon.ico')
};
