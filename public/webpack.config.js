var
  webpack = require('webpack'),
  path = require('path');

module.exports = {
  entry: './javascripts/index.js',
  output: {
    path: __dirname + '/javascripts/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.hbs$/, loader: "handlebars-loader" }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],

}
