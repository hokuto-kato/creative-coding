import "./globals"
import "p5/lib/addons/p5.sound"

export default function(p) {
	p.setup = () => {
		p.createCanvas(720, 720)
	}
	p.draw = () => {
		p.background(220)
	}
}