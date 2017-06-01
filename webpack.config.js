'use strict';

require('dotenv').config();
const webpack = require('webpack');
const ExtractText = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

let plugins = [
  new HTMLPlugin({template: `${__dirname}/app/index.html`}),
  new ExtractText('bundle-[hash].css'),
  new webpack.DefinePlugin({
    __API_URL__: JSON.stringify(process.env.API_URL),
  }),
];

if(production){
  plugins = plugins.concat([
    new CleanPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ]);
}

module.exports = {
  devtool: 'eval',
  plugins,
  entry: `${__dirname}/app/entry.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },
  //devserver allows us to always serve index.html
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(woff||woff2||eot||ttf)$/,
        loader: 'url-loader?limit=60000&name=font/[name].[ext]',
      },
      {
        test: /\.(jpg||jpeg||tiff||png||gif)$/,
        loader: 'url-loader?limit=60000&name=font/[name].[ext]',
      }
    ],
  }
};
