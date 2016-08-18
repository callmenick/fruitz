'use strict';

module.exports = function(app) {
  app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
  });
};
