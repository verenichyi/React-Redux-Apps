const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'app.js',
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: 'html-loader'
			},
			{
				test: /\.(sa|sc|c)ss$/i,
				use:
					[
						'style-loader',
						'css-loader',
						'sass-loader'
					]
			},
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader'
			},
			{
				test: /\.(png|svg|jp?g|gif|ico)$/,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				type: 'asset/resource',
			}

		]
	},
	resolve: {
		extensions: [
			'.js',
			'.jsx'
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: 'public/index.html'
		}),
	]
};