const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack           = require('webpack');
const path              = require('path');
const readline          = require('readline');

module.exports = {
  devtool : 'eval',
  entry : [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output : {
    path     : path.join(__dirname, 'dist'),
    filename : 'bundle.js',
    publicPath : '/'
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
        loaders : [
          'react-hot-loader/webpack',
          'babel?presets[]=es2015,presets[]=stage-1,presets[]=react'
        ],
        exclude : /node_modules/
      }
    ]
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin((percentage, msg) => {
      readline.clearLine(process.stdout, 0);
      readline.cursorTo(process.stdout, 0);
      process.stdout.write(`${Math.round(percentage * 100)}% ${msg}`);
    }),
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
