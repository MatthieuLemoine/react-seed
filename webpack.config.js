const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack           = require('webpack');

module.exports = {
  entry  : './src/index.js',
  output : {
    path     : './dist',
    filename : 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.json$/,
        loader : 'json-loader'
      },
      {
        test   : /\.css$/,
        loader : ExtractTextPlugin.extract(
          'style-loader',
          'css-loader'
        )
      },
      {
        test    : /\.(jsx|js)$/,
        loader  : 'babel-loader',
        query   : {
          presets : [
            'es2015',
            'react'
          ]
        },
        exclude : /node_modules/
      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      template : './src/index.html',
      inject   : true
    }),
    new webpack.ProvidePlugin({
      React : 'react'
    }),
    new ExtractTextPlugin('[name].css')
  ]
};
