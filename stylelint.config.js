module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'declaration-colon-newline-after': null,
    'number-leading-zero': null,
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
}
