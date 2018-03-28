var path = require('path');
var webpack = require('webpack');

module.exports = {
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
      }
    ]
  },
  node: {
    net: 'empty',
    dns: 'empty',
    child_process: 'empty'
  }
}
