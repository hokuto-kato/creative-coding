import "./globals"
import "p5/lib/addons/p5.sound"

const target = document.querySelector("[data-target]")
export default function() {
	const sketch = (p) => {
		let font
		let sound
		let canvas
		let isPlay = false
		let allStrings = []
		let line = 1
		let textSize = 30
		p.setup = () => {
			p.preload = () => {
				font = p.loadFont(require("~/font/JetBrainsMono-Medium.ttf"))
				sound = p.loadSound(require("~/sound/4.mp3"))
			}
			const wait = async(ms) => {
				return new Promise((resolve) => {
					setTimeout(() => {
						resolve()
					}, ms)
				})
			}
			const typewriter = (text, color, margin) => {
				return new Promise((resolve) => {
					const string = [...text]
					string.forEach((letter, i) => {
						setTimeout(() => {
							allStrings.push(letter)
							p.fill(color)
							p.text(
								letter,
								50 + 17 * allStrings.length + margin,
								25 + 40 * line,
							)
							if (i === string.length - 1) {
								resolve()
							}
						}, i * 100)
					})
				})
			}

			const addBreak = () => {
				return new Promise((resolve) => {
					line++
					allStrings = []
					resolve()
				})
			}

			const whatIAmDoing = async(doing, emoji) => {
				await addBreak()
				await typewriter("•••••••", "#3D3E3D", 0)
				await typewriter("me", "#9CDCFE", 5)
				await typewriter(".", "#D4D4D4", 0)
				await typewriter(doing, "#DCDCAA", 0)
				await typewriter("(", "#D4D4D4", 0)
				await typewriter("\"", "#CE9178", 0)
				p.textFont("sans-serif")
				sound.setVolume(0.5)
				await wait(200)
				sound.setVolume(0.5)
				sound.setVolume(1)
				await typewriter(emoji, "", 0)
				sound.setVolume(0.5)
				await wait(300)
				sound.setVolume(0.5)
				sound.setVolume(1)
				p.textFont(font)
				await typewriter("\"", "#CE9178", 13)
				sound.setVolume(0.5)
				await wait(50)
				sound.setVolume(0.5)
				sound.setVolume(1)
				await typewriter(")", "#D4D4D4", 12)
			}

			const typing = async() => {
				p.textFont(font)
				await typewriter("const", "#569CD6", 0)
				await typewriter(" myLife", "#DCDCAA", 0)
				await typewriter(" = ()", "#D4D4D4", 0)
				await typewriter(" =>", "#569CD6", 0)
				await typewriter(" {", "#D4D4D4", 0)
				await addBreak()
				await typewriter("••••", "#3D3E3D", 0)
				await typewriter("while", "#C586C0", 0)
				await typewriter("(", "#D4D4D4", 0)
				await typewriter("isAlive", "#DCDCAA", 0)
				await typewriter("()) {", "#D4D4D4", 0)
				await whatIAmDoing("eat", "🍔")
				await whatIAmDoing("luck", "🍀")
				await whatIAmDoing("people", "👨‍👩‍👧‍👦")
				await whatIAmDoing("code", "💻")
				await whatIAmDoing("music", "🎧")
				await whatIAmDoing("game", "🎮")
				await whatIAmDoing("sleep", "😪")
				await addBreak()
				await typewriter("•••••••", "#3D3E3D", 0)
				await typewriter("if", "#C586C0", 0)
				await typewriter("(", "#D4D4D4", 0)
				await typewriter("isDead", "#DCDCAA", 0)
				await typewriter("()) {", "#D4D4D4", 0)
				await addBreak()
				await typewriter("•••••••••", "#3D3E3D", 0)
				await typewriter("me ", "#9CDCFE", 0)
				await typewriter("= ", "#D4D4D4", 0)
				await typewriter("null", "#569CD6", 0)
				await addBreak()
				await typewriter("•••••••••", "#3D3E3D", 0)
				await typewriter("break", "#C586C0", 0)
				await addBreak()
				sound.setVolume(0.1)
				sound.pause()
				await wait(400)
				sound.play()
				sound.setVolume(1)
				await typewriter("•••••••", "#3D3E3D", 0)
				await typewriter("}", "#D4D4D4", 5)
				await addBreak()
				sound.setVolume(0.1)
				sound.pause()
				await wait(300)
				sound.play()
				sound.setVolume(1)
				await typewriter("••••", "#3D3E3D", 0)
				await typewriter("}", "#D4D4D4", 5)
				await wait(500)
				await addBreak()
				await typewriter("}", "#D4D4D4", 0)
				sound.pause()
				await wait(1000)
				sound.play()
				await addBreak()
				await typewriter("myLife", "#DCDCAA", 0)
				await typewriter("()", "#D4D4D4", 0)
				sound.stop()
			}
			canvas = p.createCanvas(720, 720)
			p.cursor(p.HAND)
			p.colorMode(p.HSL, 360, 100, 100, 100)
			p.background(0, 0, 12)
			p.textSize(textSize)
			canvas.mousePressed(() => {
				if(!isPlay){
					p.cursor(p.ARROW)
					isPlay = true
					sound.loop()
					typing()
				}
			})
		}
		p.draw = () => {}
	}
	new p5(sketch, target)
}
