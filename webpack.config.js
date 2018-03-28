var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: path.join(__dirname, 'app/base.js'),

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'javascripts/bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'app')
        ],
        exclude: [
          /node_modules/
        ],
        loader: 'babel-loader',
        options: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.scss?$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader","sass-loader"],
          publicPath: path.join(__dirname, 'public')
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: "stylesheets/build.css",
      disable: false,
      allChunks: true
    })
  ],

  node: {
    net: 'empty',
    dns: 'empty',
    child_process: 'empty'
  }
}
