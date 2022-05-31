class SecondPolygon {
	constructor(x, y, s, r) {
		this.options = {
			restitution: 1,
			friction: 0,
		}
		this.secondBodies = Bodies.polygon(x, y, s, r, this.options)
		Matter.Composite.add(world, this.secondBodies)
		this.s = s
	}
	show() {
		let pos = this.secondBodies.position
		let angle = this.secondBodies.angle
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
		Matter.Composite.remove(world, this.secondBodies)
	}
}