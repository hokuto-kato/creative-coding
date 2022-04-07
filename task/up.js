const cpx = require("cpx")
const fs = require("fs")
const red = "\u001b[31m"
const configFile = [
	"./webpack.common.js",
	"./webpack.dev.js",
	"./webpack.prod.js",
]
const option = {
	clean: true,
}

const sketchID = () => {
	return Number(process.argv[2])
}

const copyFile = () => {
	cpx.copy(`./src/**/*`, `./sketch/${sketchID()}/`, option, (err) => {
		if (err) throw err
		console.log("copy done")
	})
}
const replace = () => {
	configFile.forEach((val, index) => {
		fs.readFile(val, "utf8", (err, data) => {
			if (err) throw err
			const result = data.replace(/const sketchID = \d+/g,
				`const sketchID = ${process.argv[2]}`)

			fs.writeFile(val, result, "utf8", function(err) {
				if (err) return console.log(err)
			})
		})
		if (configFile.length === index + 1) return console.log("replace done")
	})
}
const up = () => {
	if (!process.argv[2]) return console.log(`${red}IDが指定されていません`)
	replace()
	copyFile()
}

up()