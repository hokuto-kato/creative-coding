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

const copyFile = () => {
	cpx.copy(`./sketch/${Number(process.argv[2])}/**/*`, `./src/`, option, (err) => {
		if (err) throw err
		console.log("copy done")
	})
}
const replace = () => {
	configFile.forEach(val => {
		fs.readFile(val, "utf8", (err, data) => {
			if (err) throw err
			const result = data.replace(/const sketchID = \d+/g,
				`const sketchID = ${process.argv[2]}`)

			fs.writeFile(val, result, "utf8", function(err) {
				if (err) return console.log(err)
			})
		})
	})
	console.log("replace done")
}
const down = () => {
	if (!process.argv[2]) return console.log(`${red}IDが指定されていません`)
	replace()
	copyFile()
}

down()