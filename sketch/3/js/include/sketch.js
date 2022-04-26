import "./globals"
import "p5/lib/addons/p5.sound"

const target = document.querySelector("[data-target]")
export default function() {
	let sound
	let canvas
	let amplitude
	const sketch = (p) => {
		p.setup = () => {
			canvas = p.createCanvas(720, 720)
			sound = p.loadSound(require("~/sound/3.mp3"))
			p.cursor(p.HAND)
			canvas.mousePressed(() => {
				if (sound.isPlaying()) {
					sound.pause()
				} else {
					sound.loop()
				}
			})
			amplitude = new p5.Amplitude()
		}
		p.draw = () => {
			p.background("#000")
			const level = amplitude.getLevel()
			for (let i = 0; i < 1000; i++) {
				p.stroke("#fff")
				p.strokeWeight(p.random(3))
				p.point(p.random(p.width), p.random(p.height))
			}
			p.stroke("#FFB50A")
			p.fill("#000")
			if(level === 0){
				p.translate(
					p.width / 2.5 ,
					p.height / 2.5,
				)
			} else {
				p.translate(
					p.width * level * 1.4,
					p.height * level * 1.4,
				)
			}
			for (let j = 0; j < 150; j++) {
				drawTriangle(j, j, 100)
				drawTriangle(j, j, 20)
			}
		}
		const drawTriangle = (x, y, r) => {
			p.push()
			p.translate(x, y)
			p.rotate(-10)
			p.beginShape()
			for (let i = 0; i < 4; i++) {
				p.vertex(r * p.cos((360 * i) / 4), r * p.sin((360 * i) / 4))
			}
			p.endShape(p.CLOSE)
			p.pop()
		}
	}
	new p5(sketch, target)
}