import "./globals"

const target = document.querySelector("[data-target]")
export default function() {
	let xoff
	let yoff
	let noise
	let r
	let x
	let y
	const sketch = (p) => {
		const drawAmeba = (speed, bobbleRate, size, color) => {
			let phase = p.frameCount * speed
			p.noStroke()
			p.fill(color)
			p.beginShape()
			for (let i = 0; i <= p.TWO_PI; i += p.PI / 180) {
				xoff = p.map(p.cos(i), -1, 1, 0, bobbleRate)
				yoff = p.map(p.sin(i), -1, 1, 0, bobbleRate)
				noise = p.noise(xoff + phase, yoff + phase)
				r = p.map(noise, 0, 1, 80, size)
				x = r * p.cos(i)
				y = r * p.sin(i)
				p.vertex(x, y)
			}
			p.endShape()
		}
		p.setup = () => {
			p.createCanvas(p.windowWidth, p.windowHeight)
		}
		p.draw = () => {
			p.drawingContext.filter = "blur(100px)"
			p.background("#fef0f1")
			p.translate(p.width / 3, p.height / 3)
			drawAmeba(0.003, 0.5, 1000, "#ee424a")
			p.translate(p.width / 3, p.height / 3)
			drawAmeba(0.002, 0.5, 1000, "#46bab5")
		}
		p.windowResized = () => {
			p.resizeCanvas(p.windowWidth, p.windowHeight)
		}
	}
	new p5(sketch, target)
}