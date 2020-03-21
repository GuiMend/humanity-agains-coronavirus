/* eslint-disable */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const resolve = require('./_resolve.js')

const moduleRules = [
  {
    test: /\.js$|.jsx$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
  },
  {
    test: /\.css$/,
    include: /node_modules/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: false,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 2,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      {
        loader: 'postcss-loader',
      },
    ],
  },
  {
    test: /\.(jpe?g|png|ico|gif|otf)$/i,
    loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
  },
  {
    test: /\.svg$/,
    use: [
      {
        loader: 'svg-sprite-loader',
        options: {
          symbolId: '[name]_[hash]',
        },
      },
    ],
  },
]

module.exports = config => {
  config.plugins[5] = new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[id].[hash].css',
  })

  config.optimization.splitChunks.cacheGroups = {
    styles: {
      name: 'styles',
      test: /\.css$/,
      chunks: 'all',
      enforce: true,
    },
  }

  config.module.rules = moduleRules
  config.resolve = resolve
}
