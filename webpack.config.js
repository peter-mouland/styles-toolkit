const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const prefix = require('postcss-prefix-selector');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  name: 'styles-toolkit',
  entry: {
    'dist/toolkit': ["./styles/toolkit.scss"],
    'docs/styles/toolkit': ["./styles/toolkit.scss"]
  },
  output: {
    path: path.join(__dirname),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ],
  resolve: {
    modulesDirectories: [ 'node_modules', './styles' ]
  },
  module: {
    loaders: [
      { test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", [ "css", "postcss", "sass" ].join("!"))
      },
      { test: /\.woff(2)?$/, loader: "url?mimetype=application/font-woff" }
    ]
  },
  postcss: [autoprefixer({
        browsers: [
          'safari 9',
          'ie 10-11',
          'last 2 Chrome versions',
          'last 2 Firefox versions',
          'edge 13',
          'ios_saf 9.0-9.2',
          'ie_mob 11',
          'Android >= 4'
        ],
        cascade: false,
        add: true,
        remove: true
      }
  )]
};
