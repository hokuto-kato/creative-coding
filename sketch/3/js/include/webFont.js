import WebFont from "webfontloader"

export default function() {
	const html = document.querySelector("html")
	WebFont.load({
		google: {
			families: [
				"Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
				"Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900",
			],
		},
	})
	setTimeout(() => {
			html.classList.add("wf-inactive")
		}, 3000
	)
}
