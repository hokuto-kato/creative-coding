class Boundaries{constructor(t,s,o,i){this.options={isStatic:!0},this.boundaryBodies=Bodies.rectangle(t,s,o,i,this.options),Matter.Composite.add(world,this.boundaryBodies),this.x=t,this.y=s,this.w=o,this.h=i}show(){push(),noFill(),stroke(255),strokeWeight(0),rectMode(CENTER),rect(this.x,this.y,this.w,this.h),pop()}remove(){Matter.Composite.remove(world,this.boundaryBodies)}}