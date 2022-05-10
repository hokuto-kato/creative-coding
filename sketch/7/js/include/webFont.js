import WebFont from "webfontloader"

export default function() {
	const html = document.querySelector("html")
	WebFont.load({
		google: {
			families: [
				"Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
				"Source+Sans+Pro",
			],
		},
	})
	setTimeout(() => {
			html.classList.add("wf-inactive")
		}, 3000
	)
}
