const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
  	'semver.browser': './semver.js',
  	'semver.browser.min': './semver.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'semver'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/
    })
  ]
}
