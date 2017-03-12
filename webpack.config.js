var path = require('path');
var app = path.resolve(__dirname, 'src', 'root');
var webpack = require('webpack');
var ngAnnotateWebpackPlugin = require('ng-annotate-webpack-plugin');
var progressBarPlugin = require('progress-bar-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');


module.exports = function(env) {
  return {
  context: path.resolve(__dirname, 'src'),
  entry: {
    vendors: [
      'angular',
      'angular-animate',
      'angular-ui-bootstrap',
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
      {test: /\.html$/, use: ['html-loader']},
      {test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {test: /\.scss$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "file-loader"
      }
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
    new extractTextPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false
    })
  ]
  }
};
