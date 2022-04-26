import "./globals"
import "p5/lib/addons/p5.sound"

const target = document.querySelector("[data-target]")
export default function() {
	const sketch = (p) => {
		p.setup = () => {
			p.createCanvas(400, 400)
		}
		p.draw = () => {
			p.background(220)
		}
	}
	new p5(sketch, target)
}