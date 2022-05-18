import "../sass/app.sass"
import "./include/myfont.font"
import clock from "./include/clock"

const target = document.querySelector("[data-target]")
document.addEventListener("DOMContentLoaded", () => {
	clock()
})
