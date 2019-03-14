const path = require('path');
const merge = require('webpack-merge');
const webpackBaseConfig = require('../../webpackBase.config');

module.exports = merge(
  {
    output: {
      path: path.resolve(__dirname, './dist'),
    },
  },
  webpackBaseConfig,
);
