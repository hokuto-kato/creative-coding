import "../sass/app.sass"
import sketch from './include/sketch'

const target = document.querySelector("[data-target]")
document.addEventListener("DOMContentLoaded", () => {
	new p5(sketch, target)
})
