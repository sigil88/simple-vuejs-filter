var path 	= require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: [{
				loader: "style-loader" // creates style nodes from JS strings 
			}, {
				loader: "css-loader" // translates CSS into CommonJS 
			}, {
				loader: "sass-loader" // compiles Sass to CSS 
			}]
		}]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.js',
		},
	}
};
