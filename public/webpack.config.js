var
  webpack = require('webpack'),
  path = require('path');

module.exports = {
  entry: './js/main.js',
  output: {
    path: __dirname + '/js',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
}
