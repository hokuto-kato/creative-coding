class Boundaries {
	constructor(x, y, w, h) {
		this.options = {
			isStatic: true,
		}
		this.boundaryBodies = Bodies.rectangle(x, y, w, h, this.options)
		Matter.Composite.add(world, this.boundaryBodies)
		this.x = x
		this.y = y
		this.w = w
		this.h = h
	}
	show() {
		push()
		noFill()
		stroke(255)
		strokeWeight(0)
		rectMode(CENTER)
		rect(this.x, this.y, this.w, this.h)
		pop()
	}
	remove() {
		Matter.Composite.remove(world, this.boundaryBodies)
	}
}