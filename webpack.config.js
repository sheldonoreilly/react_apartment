const path = require("path");

module.exports = {
	entry: ["babel-polyfill", "./src/index.js"],
	output: {
		path: path.resolve(__dirname, "public/scripts"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				loader: "babel-loader",
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "public"),
		historyApiFallback: true,
		publicPath: "/dist/"
	},
	devtool: "source-map"
};
