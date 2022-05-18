export default function() {
	const hourTarget = document.querySelector("[data-hour]")
	const minuteTarget = document.querySelector("[data-minute]")
	setInterval(() => {
		hourTarget.innerHTML = ""
		minuteTarget.innerHTML = ""
		const hour = new Date().getHours()
		const minute = new Date().getMinutes()
		const padHour = String(hour).padStart(2, "0")
		const padMinuit = String(minute).padStart(2, "0")
		const hours = padHour.split("")
		const minuets = padMinuit.split("")
		hours.forEach((hour) => {
			hourTarget.insertAdjacentHTML("beforeend",`<div class="icon icon-${hour}"></div>`)
		})
		minuets.forEach((minute) => {
			minuteTarget.insertAdjacentHTML("beforeend",`<div class="icon icon-${minute}"></div>`)
		})
	}, 1000)
}
