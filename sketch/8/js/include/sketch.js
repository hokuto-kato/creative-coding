import "./globals"
import "p5/lib/addons/p5.sound"

export default function() {
	const target = document.querySelector("[data-target]")
	let x, y, r
	let bubble
	let bubbles = []
	let bubbleLength = 2000
	let sound
	let canvas
	const sketch = (p) => {
		p.preload = () => {
			sound = p.loadSound(require("~/sound/8.mp3"))
		}
		p.setup = () => {
			canvas = p.createCanvas(720, 720)
			p.cursor(p.HAND)
			canvas.mousePressed(summerStart)
		}
		p.draw = () => {
			p.background("#A3D7BA")
			bubbles.forEach((b) => {
				b.show()
				b.move()
				b.changeColor()
			})
		}
		function summerStart() {
			if (sound.isPlaying()) {
				sound.stop()
				sound.play()
				showBubbles()
			} else {
				sound.play()
				showBubbles()
			}
		}
		function showBubbles() {
			bubbles = []
			for (let i = 0; i < bubbleLength; i++) {
				x = p.random(p.width)
				y = p.random(p.height)
				r = p.random(1, 10)
				bubble = new Bubble(x, y, r)
				bubbles.push(bubble)
			}
		}

		class Bubble {
			constructor(x, y, r) {
				this.x = x
				this.y = y
				this.r = r
				this.color = ""
			}
			changeColor() {
				this.color = p.random(["#A3D7BA", "#FFF"])
			}
			show() {
				p.stroke("#FFF")
				p.strokeWeight(1)
				p.fill(this.color)
				p.circle(this.x, this.y, this.r)
			}
			move() {
				this.x += p.random(-5, 5)
				this.y += p.random(-5, 5) - p.random(0, 5)
			}
		}
	}
	new p5(sketch, target)
}