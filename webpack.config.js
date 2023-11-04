const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const defaultConfig = require('@wordpress/scripts/config/webpack.config');

const entry = require('./.webpack/entry');
const outputFilename = require('./.webpack/output-filename');

const plugins = defaultConfig.plugins.filter((plugin) => {
	return (
		plugin.constructor.name !== 'MiniCssExtractPlugin'
	);
});

module.exports = {
	...defaultConfig,
	output: {
		path: path.join(__dirname, 'build'),
		filename: outputFilename
	},
	entry,
	plugins: [
		...plugins,
		new MiniCssExtractPlugin(
			{
				filename: (pathData) => {
					if (pathData.chunk.name.startsWith('./style-')) {
						const name = pathData.chunk.name.substring(8);
						return `${ name }/style.css`;
					}
					return '[name]/editor.css';
				},
			}
		)
	]
};
