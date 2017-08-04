var path 			= require('path');
var webpack 		= require('webpack');

// TODO 
// 		- add autoprefixer for css
//		- add browsersync

// output css into separate file
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

// config
module.exports = {
	entry: ['./src/index.js', './src/css/app.scss'],
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
	      	{
		        test: /\.scss$/,
		        use: ExtractTextPlugin.extract({
		          fallback: 'style-loader',
		          use: ['css-loader', 'sass-loader']
		        })
	      	}
		]
	},
	plugins: [
		new ExtractTextPlugin("styles.css"),
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.js',
		},
	}
};
