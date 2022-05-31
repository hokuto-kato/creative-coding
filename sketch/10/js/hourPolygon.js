class HourPolygon {
	constructor(x, y, s, r) {
		this.options = {
			restitution: 1,
			friction: 0,
		}
		this.hourBodies = Bodies.polygon(x, y, s, r, this.options)
		Matter.Composite.add(world, this.hourBodies)
		this.s = s
	}
	show() {
		let pos = this.hourBodies.position
		let angle = this.hourBodies.angle
		push()
		translate(pos.x, pos.y)
		rotate(angle)
		stroke(255)
		fill(0)
		strokeWeight(1)
		polygon(0, 0, this.s, random(5, 10))
		pop()
	}
	remove() {
		Matter.Composite.remove(world, this.hourBodies)
	}
}