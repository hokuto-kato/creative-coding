// import "globals"
// import "p5/lib/addons/p5.sound"
// import "p5.play/lib/p5.play"

export default function() {
	const target = document.querySelector("[data-target]")
	let sUp
	let sRightUp
	let sRight
	let sRightLow
	let sDown
	let sLeftLow
	let sLeft
	let sLeftUp
	let sButterflyLeft
	let sButterflyRight
	let bell
	let aUp
	let aRightUp
	let aRight
	let aRightLow
	let aDown
	let aLeftLow
	let aLeft
	let aLeftUp
	let aButterflyLeft
	let aButterflyRight
	const sketch = (p) => {
		p.setup = () => {
			sUp = p.loadSpriteSheet(require("~/img/up.png"), 320, 380, 2)
			sRightUp = p.loadSpriteSheet(require("~/img/right-up.png"), 320, 380, 2)
			sRight = p.loadSpriteSheet(require("~/img/right.png"), 320, 380, 2)
			sRightLow = p.loadSpriteSheet(
				require("~/img/right-low.png"),
				320,
				380,
				2,
			)
			sDown = p.loadSpriteSheet(require("~/img/down.png"), 320, 380, 2)
			sLeftLow = p.loadSpriteSheet(require("~/img/left-low.png"), 320, 380, 2)
			sLeft = p.loadSpriteSheet(require("~/img/left.png"), 320, 380, 2)
			sLeftUp = p.loadSpriteSheet(require("~/img/left-up.png"), 320, 380, 2)
			sButterflyLeft = p.loadSpriteSheet(
				require("~/img/butterflyLeft.png"),
				65,
				75,
				2,
			)
			sButterflyRight = p.loadSpriteSheet(
				require("~/img/butterflyRight.png"),
				65,
				75,
				2,
			)
			bell = p.loadSound(require("~/sound/bell.mp3"))
			let canvas = p.createCanvas(720, 720)
			canvas.mousePressed(p.canvasPressed)
			p.frameRate(20)
			aUp = p.loadAnimation(sUp)
			aRightUp = p.loadAnimation(sRightUp)
			aRight = p.loadAnimation(sRight)
			aRightLow = p.loadAnimation(sRightLow)
			aDown = p.loadAnimation(sDown)
			aLeftLow = p.loadAnimation(sLeftLow)
			aLeft = p.loadAnimation(sLeft)
			aLeftUp = p.loadAnimation(sLeftUp)
			aButterflyLeft = p.loadAnimation(sButterflyLeft)
			aButterflyRight = p.loadAnimation(sButterflyRight)
		}
		p.draw = () => {
			p.clear()
			p.noCursor()
			p.background("#C6DAAC")
			if (p.mouseX <= p.width / 2) {
				p.animation(aButterflyLeft, p.mouseX, p.mouseY)
			} else {
				p.animation(aButterflyRight, p.mouseX, p.mouseY)
			}
			if (
				p.mouseX >= p.width / 3 &&
				p.mouseX <= p.width / 1.5 &&
				p.mouseY <= p.width / 2
			) {
				//     UP
				p.animation(aUp, p.width / 2, p.height / 2)
			} else if (
				p.mouseX >= p.width / 3 &&
				p.mouseX <= p.width / 1.5 &&
				p.mouseY >= p.height / 2
			) {
				//     DOWN
				p.animation(aDown, p.width / 2, p.height / 2)
			} else if (
				p.mouseX <= p.width / 2 &&
				p.mouseY >= p.height / 3 &&
				p.mouseY <= p.height / 1.5
			) {
				//     LEFT
				p.animation(aLeft, p.width / 2, p.height / 2)
			} else if (
				p.mouseX >= p.width / 2 &&
				p.mouseY >= p.height / 3 &&
				p.mouseY <= p.height / 1.5
			) {
				//     RIGHT
				p.animation(aRight, p.width / 2, p.height / 2)
			} else if (p.mouseX <= p.width / 2 && p.mouseY <= p.width / 2) {
				//     LEFT UP
				p.animation(aLeftUp, p.width / 2, p.height / 2)
			} else if (p.mouseX <= p.width / 2 && p.mouseY > p.width / 2) {
				//     LEFT LOW
				p.animation(aLeftLow, p.width / 2, p.height / 2)
			} else if (p.mouseX > p.width / 2 && p.mouseY <= p.width / 2) {
				//     RIGHT UP
				p.animation(aRightUp, p.width / 2, p.height / 2)
			} else if (p.mouseX >= p.width / 2 && p.mouseY >= p.height / 2) {
				//     RIGHT LOW
				p.animation(aRightLow, p.width / 2, p.height / 2)
			}

			//   up & down range
			// line(p.width / 3, 0, p.width / 1.5, p.height);
			// line(p.width / 1.5, 0, p.width / 3, p.height);

			//   left & right range
			// line(p.width, p.height / 1.5, 0, p.height / 3);
			// line(0, p.height / 1.5, p.height, p.height / 3);
		}
		p.canvasPressed = () => {
			bell.play()
		}
	}
	new p5(sketch, target)
}
