import "./globals"

export default function(p) {
	let planes = []
	let feathers = []
	const createPlane = () => {
		for (let i = 0; i < 25; i++) {
			planes.push(new Plane(p.random(p.width), p.random(p.height)))
		}
	}
	const createFeather = () => {
		for (let i = 0; i < p.width; i++) {
			feathers.push(new Feather())
		}
	}
	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight)
		createPlane()
		createFeather()
	}
	p.draw = () => {
		p.background(0)
		for (let i = 0; i < feathers.length; i++) {
			feathers[i].show()
			feathers[i].update()
		}
		for (let i = 0; i < planes.length; i++) {
			planes[i].show()
			planes[i].update()
		}
	}
	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth, p.windowHeight)
		feathers = []
		planes = []
		createFeather()
		createPlane()
	}

	class Plane {
		constructor(x, y) {
			this.x = x
			this.y = y
			this.history = []
		}
		show() {
			p.stroke(255)
			p.beginShape()
			for (let i = 0; i < this.history.length; i++) {
				let pos = this.history[i]
				p.noFill()
				p.strokeWeight(0.5)
				p.vertex(pos.x + 50, pos.y + 50)
			}
			p.endShape()
			p.noStroke()
			p.fill(255)
			p.triangle(
				this.x,
				this.y,
				this.x + p.random(50),
				this.y + p.random(50),
				this.x + p.random(50),
				this.y + p.random(50),
			)
		}
		update() {
			this.x += p.random(-5, 5)
			this.y += p.random(-5, 5)

			for (let i = 0; i < this.history.length; i++) {
				this.history[i].x += p.random(-0, 10)
				this.history[i].y += p.random(-0, 10)
			}

			let v = p.createVector(this.x, this.y)
			this.history.push(v)
			if (this.history.length > 20) {
				this.history.splice(0, 1)
			}
		}
	}

	class Feather {
		constructor() {
			this.x = p.random(-p.width, p.width) * 2
			this.y = p.random(-p.height, p.height) * 2
		}
		show() {
			p.stroke(255)
			p.fill(255)
			p.strokeWeight(0.5)
			p.triangle(
				this.x,
				this.y,
				this.x + 0,
				this.y + 0,
				this.x + p.random(0, 10),
				this.y + p.random(0, 10),
			)
		}
		update() {
			this.x += 1
			this.y += 1
			if (this.x >= p.width) {
				this.x = p.random(-p.width, p.width * 2)
			}
			if (this.y >= p.height) {
				this.y = p.random(-p.height, p.height)
			}
		}
	}
}
