module.exports = function(app) {
  'use strict';

  if (app.get('config').env === 'development') app.locals.pretty = true;
};
