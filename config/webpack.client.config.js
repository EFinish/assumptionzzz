'use strict'

const {
	VueLoaderPlugin
} = require('vue-loader');

module.exports = () => {
	return {
		module: {
			rules: [{
				test: /.js?$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				},
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					compilerOptions: {
						whitespace: 'condense'
					},
					loaders: {
						css: [
							'vue-style-loader',
							{
								loader: 'css-loader'
							}
						]
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}]
		},
		plugins: [
			new VueLoaderPlugin()
		],
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		}
	}
}

'use strict'

const path = require('path');

module.exports = {
	entry: path.resolve(__dirname + '/../client/app.js'),
	output: {
		filename: 'client.js',
		path: path.resolve(__dirname + '/../build/')
	},
	module: {
		rules: [{
			test: /.js?$/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			},
			exclude: /node_modules/
		},
		{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				compilerOptions: {
					whitespace: 'condense'
				},
				loaders: {
					css: [
						'vue-style-loader',
						{
							loader: 'css-loader'
						}
					]
				}
			}
		},
		{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}]
	},
	plugins: [
		new VueLoaderPlugin()
	],
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000
	}
}