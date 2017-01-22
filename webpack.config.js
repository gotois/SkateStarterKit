'use strict';
const autoprefixer = require('autoprefixer');
require('raw-loader');

module.exports = {
  watch: true,
  cache: true,
  devtool: 'source-map',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [],
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    moduleDirectories: ['node_modules']
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['raw', 'postcss-loader']
      }
    ],
  }
};
