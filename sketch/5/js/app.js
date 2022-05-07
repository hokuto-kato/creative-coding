import "../sass/app.sass"
import sketch from "./include/sketch"
import webFont from "./include/webFont"
import addCaption from "./include/addCaption"

document.addEventListener("DOMContentLoaded", () => {
	sketch()
	webFont()
})
window.addEventListener("load", () => {
	addCaption()
})
