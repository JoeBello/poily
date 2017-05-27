var path = require('path'),
    app = path.resolve(__dirname, 'src', 'root'),
    extractTextPlugin = require('extract-text-webpack-plugin'),
    ngAnnotateWebpackPlugin = require('ng-annotate-webpack-plugin'),
    progressBarPlugin = require('progress-bar-webpack-plugin'),
    webpack = require('webpack');

module.exports = function(env){
  var config =  {
    context: path.resolve(__dirname, 'src'),
    entry: {
      vendors: [
        'angular',
        'angular-animate',
        'angular-ui-bootstrap',
        '@uirouter/angularjs',
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
        {test: /\.html$/, use: ['html-loader?interpolate=require']},
        {test: /\.scss$/,
          use: extractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        },
        {test: /\.woff?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: "url-loader?name=[name].[ext]&publicPath=./&limit=50000&mimetype=application/font-woff"
        },
        {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: "url-loader?name=[name].[ext]&publicPath=./&limit=50000&mimetype=application/font-woff2"
        },
        { test: /\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: "url-loader?name=[name].[ext]&publicPath=./&limit=50000&mimetype=application/octet-stream"
        },
        { test: /\.(eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: "file-loader?name=[name].[ext]&mimetype=application/vnd.ms-fontobject"
        },
        { test: /\.(jpg|)$/,
          use: "url-loader?name=[name].[ext]&limit=50000&mimetype=image/jpeg"
        },
        { test: /\.(png)$/,
          use: "url-loader?name=[name].[ext]&limit=50000&mimetype=image/png"
        },
        { test: /\.(svg)$/,
          use: "url-loader?name=[name].[ext]&limit=50000&mimetype=image/svg+xml"
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
        proxy: { '/': 'http://localhost:3000' }
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
