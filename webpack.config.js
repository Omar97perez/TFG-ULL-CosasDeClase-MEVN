const  {VueLoaderPlugin}  = require('vue-loader');

module.exports = {
  entry: './app/src/app/index.js',
  output: {
    path: __dirname + '/app/src/public/js',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
