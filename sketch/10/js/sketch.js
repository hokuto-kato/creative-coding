let Engine = Matter.Engine
let Bodies = Matter.Bodies
let engine
let world
let boundaries = []
let hourPolygons = []
let minutePolygons = []
let secondPolygons = []
let font
let hourText
let minuteText
let secondText

const initClock = () => {
	hourText = hour()
	minuteText = minute()
	secondText = second()
	showText()
	hourPolygons.forEach(polygon => {
		polygon.remove()
		hourPolygons = []
	})
	minutePolygons.forEach(polygon => {
		polygon.remove()
		minutePolygons = []
	})
	secondPolygons.forEach(polygon => {
		polygon.remove()
		secondPolygons = []
	})

	for (let i = 0; i < hour(); i++) {
		hourPolygons.push(new HourPolygon(140, 0, 20, 20))
	}
	for (let i = 0; i < minute(); i++) {
		minutePolygons.push(new MinutePolygon(360, 0, 20, 20))
	}
	for (let i = 0; i < second(); i++) {
		secondPolygons.push(new SecondPolygon(580, 0, 20, 20))
	}
}
const showText = () => {
	textSize(20)
	fill(255)
	noStroke()
	textFont(font)
	text(hourText, 120, height - 15)
	text(minuteText, 345, height - 15)
	text(secondText, 580, height - 15)
}
const polygon = (x, y, radius, npoints) => {
	let angle = TWO_PI / npoints
	beginShape()
	for (let a = 0; a < TWO_PI; a += angle) {
		let sx = x + cos(a) * radius
		let sy = y + sin(a) * radius
		vertex(sx, sy)
	}
	endShape(CLOSE)
}
const handleSecond = () => {
	hourText = hour()
	minuteText = minute()
	secondText = second()
	if (hourPolygons.length === 0) {
		hourPolygons.forEach(polygon => {
			polygon.remove()
			hourPolygons = []
		})
		minutePolygons.forEach(polygon => {
			polygon.remove()
			minutePolygons = []
		})
		secondPolygons.forEach(polygon => {
			polygon.remove()
			secondPolygons = []
		})
	}
	if (minute() === 0) {
		minutePolygons.forEach(polygon => {
			polygon.remove()
			minutePolygons = []
		})
		hourPolygons.push(new HourPolygon(140, 0, 20, 20))
	}
	if (second() === 0) {
		secondPolygons.forEach(polygon => {
			polygon.remove()
			secondPolygons = []
		})
		minutePolygons.push(new MinutePolygon(360, 0, 20, 20))
	} else {
		secondPolygons.push(new SecondPolygon(random(570, 590), 20, 20, 20))
	}
}

function preload() {
	font = loadFont("/../../font/Minimal-Mono-Regular.ttf")
}
function setup() {
	createCanvas(720, 720)
	engine = Engine.create()
	world = engine.world
	boundaries = [
		new Boundaries(25, height / 2, 50, height * 2),
		new Boundaries(245, height / 2, 50, height * 2),
		new Boundaries(475, height / 2, 50, height * 2),
		new Boundaries(695, height / 2, 50, height * 2),
		new Boundaries(0, height - 25, width * 2, 50),
	]
	Matter.Runner.run(engine)
	initClock()
	setInterval(handleSecond, 1000)
}

async function draw() {
	background(0)

	//bg
	stroke(255)
	strokeWeight(0.3)
	for (let i = 1; i < width; i++) {
		line(i * width / 10 + random(0, 10), 0, i * width / 10 + random(0, 10), height)
	}

	//boundaries
	boundaries.forEach(boundary => {
		boundary.show()
	})

	//polygon
	hourPolygons.forEach((polygon) => {
		polygon.show()
	})
	minutePolygons.forEach((polygon) => {
		polygon.show()
	})
	secondPolygons.forEach(polygon => {
		polygon.show()
	})

	//text
	showText()
}

document.addEventListener("visibilitychange", () => {
	if (!document.hidden) {
		initClock()
	}
})