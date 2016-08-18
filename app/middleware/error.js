module.exports = function(app) {
  'use strict';

  /** Catch 404 and forward to error handler (below) */
  app.use((req, res, next) => {
    var err = new Error('The page you are looking for cannot be found.');
    err.status = 404;
    next(err);
  });

  /** Error handlers */
  app.use((err, req, res, next) => {
    console.error('url: %s, stack: %s', req.url, err.stack);
    next(err);
  });

  /** Development error handler. Will print stacktrace */
  if (process.env.NODE_ENV !== 'production') {
    console.log('using dev/staging error handler');
    app.use((err, req, res, next) => { //eslint-disable-line
      const status = err.status || 500;
      res.status(status);
      res.render('errors/error', {
        error: err,
        status: status
      });
    });
  }

  /** Production error handler. No stacktraces leaked to user */
  app.use((err, req, res, next) => { //eslint-disable-line
    const status = err.status || 500;
    res.status(status);
    res.render('errors/error', {
      error: {},
      status: status
    });
  });
};
