var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/app/app.js',
  module: {
    loaders: [{
      test:/\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  output: {
    path: __dirname + '/build',
    filename: "bundle.js",
  }
};
