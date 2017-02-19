var path = require('path');
var app = path.resolve(__dirname, 'src', 'app');
var webpack = require('webpack');
var ngAnnotateWebpackPlugin = require('ng-annotate-webpack-plugin');
var progressBarPlugin = require('progress-bar-webpack-plugin');


module.exports = function(env) {
  return {
  context: path.resolve(__dirname, 'src'),
  entry: {
    vendors: [
      'angular',
      'angular-ui-router',
      'ngstorage-webpack'
    ],
    app: path.resolve(app, 'bootstrap')
  },
  output: {
    filename: '[name].bundle.js',
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
  devtool: env === 'prod' ? 'source-map' : 'eval',
  module: {
    rules: [
      {test: /\.html$/, use: ['html-loader'], exclude: /node_modules/},
      {test: /\.css$/, use: ['style-loader', 'css-loader'], exclude: /node_modules/}
    ]
  },
  plugins: [
    new progressBarPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors'
    }),
    new ngAnnotateWebpackPlugin({
      add: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false
    })
  ]
  }
};
