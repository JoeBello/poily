var path = require('path'),
    app = path.resolve(__dirname, 'src', 'root'),
    env = process.env.NODE_ENV || 'dev',
    extractTextPlugin = require('extract-text-webpack-plugin'),
    ngAnnotateWebpackPlugin = require('ng-annotate-webpack-plugin'),
    progressBarPlugin = require('progress-bar-webpack-plugin'),
    webpack = require('webpack')

module.exports = function(env) {
  var config =  {
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
      publicPath: 'dist/',
      sourceMapFilename: '[name].map'
    },
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
      new extractTextPlugin('styles.css')
    ]
  };

  if (env === 'dev') {
    config.devtool = 'eval';
    config.devServer = {
        contentBase: path.resolve(__dirname, 'src'),
        port: 3001,
        publicPath: '/dist/',
        proxy: { '/api/*': 'http://localhost:3000' }
      };
  }

  if (env === 'prod') {
    config.devtool = 'source-map';
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: true,
        sourceMap: false,
        mangle: false
      })
    );
  }

  return config;
};
