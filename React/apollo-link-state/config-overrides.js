const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, _env) {
  return injectBabelPlugin('transform-decorators-legacy', config)
}
