import p5 from "p5"

const target = document.querySelector("[data-target]")
export default function() {
	const sketch = (p) => {
		p.setup = () => {
			p.createCanvas(400, 400)
			p.createCanvas(600, 600)
			p.background("#181a17")
			p.stroke("#181a17")
			p.fill("#f2f2f2")
			for (let i = 0; i < 1200; i++) {
				p.circle((i * 0.5) % p.height, (i * 2.5) % p.height, i % 40)
			}
		}
	}
	new p5(sketch, target)
}
