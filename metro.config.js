const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.server = {
  port: parseInt(process.env.PORT, 10) || 8081, // Ensure port is a number
  enhanceMiddleware: (middleware, server) => {
    return (req, res, next) => {
      return middleware(req, res, next);
    };
  },
};

module.exports = defaultConfig;
