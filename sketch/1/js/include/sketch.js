import p5 from "p5"
const target = document.querySelector("[data-target]")
export default function() {
	const sketch = (p) => {
		p.setup = () => {
			p.createCanvas(600, 600)
			p.background("#28020d")
			p.noCursor()
		}

		p.draw = () => {
			p.stroke("#28020d")
			p.fill("#629e62")
			p.circle(p.mouseX, p.mouseY, p.random(100))
		}
	}
	new p5(sketch, target)
}
