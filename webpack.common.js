const HtmlWebpackPlugin = require("html-webpack-plugin")
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin")
const globule = require("globule")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin")
const pug = globule.find("./src/pug/*.pug", {
	ignore: ["./src/pug/include/*.pug"],
})
const svg = globule.find("./src/img/*.svg").length

const sketchID = 3
const buildPath = `${__dirname}/docs/${sketchID}/`
const yellow = "\u001b[33m"

console.log(`${yellow}sketch ID = ${sketchID} `)

const app = {
	target: ["web", "es6"],
	devServer: {
		static: buildPath,
		open: true,
		hot: true,
	},
	entry: {
		app: `./src/js/app.js`,
	},
	resolve: {
		extensions: [".js", ".json", ".sass", ".scss", ".css", ".pug", ".html"],
		alias: {
			"~": `${__dirname}/src`,
		},
		roots: [`${__dirname}/src`],
	},
	module: {
		rules: [
			{
				test: /\.js$/i,
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env"],
				},
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.css$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader",
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackHarddiskPlugin({
			outputPath: buildPath,
		}),
	],
}

pug.forEach((template) => {
	const fileName = template.replace("./src/pug/", "").replace(".pug", ".html")
	app.plugins.push(
		new HtmlWebpackPlugin({
			filename: `${fileName}`,
			template: template,
			inject: true,
			alwaysWriteToDisk: true,
			favicon: `./src/favicon/favicon.svg`,
		}),
	)
})

if (svg) {
	app.plugins.push(
		new SVGSpritemapPlugin(`./src/img/*.svg`, {
			output: {
				filename: "./img/sprite.svg",
			},
			sprite: {
				prefix: false,
				generate: {
					use: true,
					symbol: true,
					title: false,
				},
			},
			styles: `src/sass/sprite.scss`,
		}),
	)
}

module.exports = app