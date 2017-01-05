'use strict';

const common_config = {};
const config = {
  development: {
    env:     'development',
    port:    3000,
    common: common_config
  },
  production: {
    env:   'production',
    port:   3000,
    common: common_config
  },
};

module.exports = function(env) {
  return config[env || process.argv[2] || 'development'];
};
