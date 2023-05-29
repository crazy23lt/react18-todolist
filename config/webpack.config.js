const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
	target: "web",
	mode: "development",
	devtool: "source-map",
	entry: path.resolve(__dirname, "../src/main.js"),
	output: {
		filename: "[name].[hash:8].js",
		path: path.resolve("dist"),
		clean: true
	},
	watch: true,
	optimization: {
		minimize: true,
		usedExports: true
	},
	resolve: {
		extensions: [".jsx", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, "../src"),
				use: ["babel-loader"]
			},
			{
				test: /\.(scss|css)?$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							importLoaders: 2
						}
					},
					"postcss-loader",
					"sass-loader"
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "main",
			template: path.resolve("public/index.html"),
			favicon: path.resolve("public/favicon.ico"),
			filename: path.resolve("dist/main.html"),
			minify: true
		})
	]
};
