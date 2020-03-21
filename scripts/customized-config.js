/* eslint-disable */
// SOURCE: https://daveceddia.com/customize-create-react-app-webpack-without-ejecting/
/*
  This module runs the scripts from react-scripts (Create React App)
  and gives an opportunity to override the Webpack config by creating
  "config-overrides.dev.js" and/or "config-overrides.prod.js" files in the
  root of the project.

  A config-overrides file should export a single function that takes a
  config and modifies it as necessary.

  module.exports = function(webpackConfig) {
    webpackConfig.module.rules[0].use[0].options.useEslintrc = true;
  };
  */
const rewire = require('rewire')

// Attempt to load the given module and return null if it fails.
const loadCustomizer = module => {
  try {
    return require(module)
  } catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND') {
      throw e
    }
  }

  // If the module doesn't exist, return a
  // noop that simply returns the config it's given.
  return config => config
}

const rewireModule = (modulePath, customizer) => {
  // Load the module with `rewire`, which allows modifying the
  // script's internal variables.
  const defaults = rewire(modulePath)

  // Reach into the module, grab its global 'config' variable,
  // and pass it through the customizer function.
  // The customizer should *mutate* the config object, because
  // react-scripts imports the config as a `const` and we can't
  // modify that reference.
  const config = defaults.__get__('config')
  customizer(config)
}

switch (process.argv[2]) {
  // The "start" script is run during development mode
  case 'start':
    rewireModule('react-scripts/scripts/start.js', loadCustomizer('../webpack/config-overrides.dev'))
    break
  // The "build" script is run to produce a production bundle
  case 'build':
    rewireModule('react-scripts/scripts/build.js', loadCustomizer('../webpack/config-overrides.prod'))
    break
  default:
    console.log('customized-config only supports "start" and "build" options.')
    process.exit(-1)
}
