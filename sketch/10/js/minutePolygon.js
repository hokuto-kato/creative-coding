class MinutePolygon {
	constructor(x, y, s, r) {
		this.options = {
			restitution: 1,
			friction: 0,
		}
		this.minuteBodies = Bodies.polygon(x, y, s, r, this.options)
		Matter.Composite.add(world, this.minuteBodies)
		this.s = s
	}
	show() {
		let pos = this.minuteBodies.position
		let angle = this.minuteBodies.angle
		push()
		translate(pos.x, pos.y)
		rotate(angle)
		fill(0)
		stroke(255)
		strokeWeight(1)
		polygon(0, 0, this.s, random(5, 10))
		pop()
	}
	remove() {
		Matter.Composite.remove(world, this.minuteBodies)
	}
}