import "./globals"
import "p5/lib/addons/p5.sound"

const target = document.querySelector("[data-target]")
export default function() {
	let beat
	let amplitude
	let canvas
	let angle = 3
	let levelFlag = false
	let maxFlag = false
	let bgColor
	let mainColor
	let colors
	let colorId
	let fft

	const sketch = (p) => {
		const getColors = async() => {
			const colorResponse = await fetch(require("~/data/colors.json"))
			return await colorResponse.json()
		}
		const init = async() => {
			colors = await Promise.all([getColors()])
		}
		const setColor = () => {
			colorId = Math.floor(Math.random() * colors[0].colors.length - 1)
			bgColor = colors[0].colors[colorId].bgColor
			mainColor = colors[0].colors[colorId].mainColor
		}
		p.preload = () => {
			beat = p.loadSound(require("~/sound/6.mp3"))
		}
		p.setup = async() => {
			await init()
			canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
			amplitude = new p5.Amplitude()
			canvas.mousePressed(p.playSound)
			p.cursor(p.HAND)
			fft = new p5.FFT()
			setColor()
		}
		p.draw = async() => {

			p.rotate(p.millis() / 10000, [0, 1, 0])
			p.stroke(bgColor)
			p.strokeWeight(0.2)
			p.background(bgColor)
			p.fill(mainColor)
			p.torus(250, 150, angle, 12)
			let level = amplitude.getLevel()
			let spectrum = fft.analyze()
			console.log(level)
			if (level >= 0.1) {
				if (!levelFlag) {
					if (angle === 16) {
						maxFlag = true
					} else if (angle === 3) {
						maxFlag = false
					}
					if (maxFlag) {
						angle--
						setColor()
					} else {
						angle++
						setColor()
					}
					levelFlag = true
				}
			} else if (level < 0.1) {
				if (levelFlag) {
					levelFlag = false
				}
			}
		}
		p.windowResized = () => {
			p.resizeCanvas(p.windowWidth, p.windowHeight)
		}
		p.playSound = () => {
			if (beat.isPlaying()) {
				setColor()
				beat.stop()
			} else {
				beat.loop()
			}
		}
	}
	new p5(sketch, target)
}
