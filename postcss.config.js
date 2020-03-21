const webpack = require('webpack') // eslint-disable-line import/no-extraneous-dependencies
const autoprefixer = require('autoprefixer')
const postCSSImport = require('postcss-import')
const postCSSNested = require('postcss-nested')
const postCSSCustomMedia = require('postcss-custom-media')

const postCSSAutoprefixer = autoprefixer()

const postCssImport = postCSSImport({
  addDependencyTo: webpack,
})

const postCSSCustomMediaConfig = postCSSCustomMedia({
  importFrom: './src/config/media-queries.js',
})

module.exports = {
  plugins: [postCssImport, postCSSAutoprefixer, postCSSNested, postCSSCustomMediaConfig],
}
