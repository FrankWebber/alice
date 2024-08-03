const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.server = {
  port: process.env.PORT || 8081,
  enhanceMiddleware: (middleware, server) => {
    return (req, res, next) => {
      return middleware(req, res, next);
    };
  },
};

module.exports = defaultConfig;
