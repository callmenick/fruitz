if (process.env.NODE_ENV === 'development') require('dotenv').config();
if (process.env.NODE_ENV === 'staging' || process.env.NODE_ENV === 'production') require('newrelic');

const config = require('./config/index.js');
const express = require('express');

(() => {
  'use strict';

  /** Bootstrap the main express app */
  const app = express();

  /** App settings */
  require('./app/settings/defaults.js')(app, config);

  /** App middleware and routing */
  require('./app/middleware/locals.js')(app);
  require('./app/middleware/defaults.js')(app);
  require('./app/routes/index.js')(app);
  require('./app/middleware/error.js')(app);

  /** Set up server */
  require('./app/server/index.js')(app);
})();
