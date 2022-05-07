export default function() {
	const main = document.querySelector("main")
	main.insertAdjacentHTML("beforeend", `
			<div class="canvas__caption">
				interact : mouse move and click
				<span class="material-symbols-outlined">mouse</span>
			</div>
			`)
}