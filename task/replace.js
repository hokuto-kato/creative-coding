const fs = require("fs")
const red = "\u001b[31m"
const files = ["./webpack.common.js", "./webpack.dev.js", "./webpack.prod.js"]

files.forEach(val => {
	if (!process.argv[2]) return console.log(`${red}IDが指定されていません`)
	fs.readFile(val, "utf8", (err, data) => {
		if (err) throw err
		const result = data.replace(/const sketchID = \d/g,
			`const sketchID = ${process.argv[2]}`)

		fs.writeFile(val, result, "utf8", function(err) {
			if (err) return console.log(err)
		})
	})
})
