var path 	= require('path');
var webpack = require('webpack');
var $ 		= require("jquery");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
resolve: {
  alias: {
    'vue$': 'vue/dist/vue.js',
    'jquery': "jquery/src/jquery"
  }
}
};
