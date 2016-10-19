var
  webpack = require('webpack'),
  path = require('path');

module.exports = {
  entry: './javascripts/index.js',
  output: {
    path: __dirname + '/javascripts/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
}
