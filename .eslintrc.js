const prettierConfiguration = require('./.prettierrc.json')

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack/webpack.config.eslint.js',
      },
      'babel-module': {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': 'error',
    'no-console': [
      'error',
      {
        allow: ['warn', 'info', 'error'],
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    semi: ['error', 'never'],
    'import/named': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/stories.js',
          '**/*.dev.js',
          '**/*.test.js',
          'server.js',
          'postcss.config.js',
          'tests/setup.js',
          'webpack/webpack.config.*',
        ],
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/href-no-hash': 0,
    'prettier/prettier': ['error', prettierConfiguration],
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-bind': [
      1,
      {
        ignoreRefs: false,
        allowArrowFunctions: false,
        allowBind: true,
      },
    ],
    'react/prefer-stateless-function': [
      2,
      {
        ignorePureComponents: false,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
