'use strict';

const path = require('path');
const pkg = require('../package.json');
const port = process.env.PORT || 3000;

module.exports = {
  env: 'production',
  port: port,
  version: pkg.version,
  viewsPath: path.resolve(__dirname, '../dist/views'),
  staticPath: path.resolve(__dirname, '../dist'),
  faviconPath: path.resolve(__dirname, '../dist/img/icons/favicon.ico')
};
