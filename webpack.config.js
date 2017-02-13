var path = require('path');
var webpack = require('webpack');
var progressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    vendor: [
      'angular',
      'angular-ui-router',
      'ngstorage-webpack'
    ],
    app: path.resolve(app, 'bootstrap')
  },
  output: {
    filename: 'bundle.[name].js',
    path: path.resolve(__dirname, 'src', 'dist'),
    publicPath: '/dist/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    port: 3001,
    publicPath: '/dist/',
    proxy: {
      '/api/*': 'http://localhost:3000'
    }
  },
  module: {
    rules: [
      {test: /\.html$/, use: 'raw-loader', exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new progressBarPlugin()
  ]
};
