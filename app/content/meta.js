'use strict';

module.exports = function(name) {
  const SITE_NAME = 'Fruitz';
  const SITE_DESCRIPTION = 'Just some fruitz!';

  const META_COLLECTION = {
    'default': {
      title: `${SITE_NAME} - Welcome to Fruitz`,
      description: SITE_DESCRIPTION
    },
    'home': {
      title: `${SITE_NAME} - Welcome to Fruitz`,
      description: SITE_DESCRIPTION
    }
  };

  let meta = META_COLLECTION[name] || META_COLLECTION['default'];

  if (process.env.NODE_ENV === 'development') meta.title = `Development - ${meta.title}`;
  if (process.env.NODE_ENV === 'staging') meta.title = `Staging - ${meta.title}`;

  return meta;
};
