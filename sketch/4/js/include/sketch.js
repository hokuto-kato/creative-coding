import wait from "./wait.js"

export default function() {
	const canvas = document.querySelector("[data-canvas]")
	window.AudioContext = window.AudioContext || window.webkitAudioContext
	const ctx = new AudioContext()
	let source
	let timerId
	let isPlay = false

	const setUpSound = async() => {
		const response = await fetch(require("~/sound/4.mp3"))
		const arrayBuffer = await response.arrayBuffer()
		return await ctx.decodeAudioData(arrayBuffer)
	}

	const playSound = (ctx, audioBuffer) => {
		source = ctx.createBufferSource()
		source.buffer = audioBuffer
		source.connect(ctx.destination)
		source.start()
	}

	const typewriter = (text, color) => {
		return new Promise((resolve) => {
			const string = [...text]
			const span = document.createElement("span")
			span.style.color = color
			canvas.appendChild(span)
			string.forEach((text, i) => {
				timerId = setTimeout(() => {
					span.insertAdjacentHTML("beforeend", text)
					if (i === string.length - 1) {
						resolve()
					}
				}, i * 100)
			})
		})
	}
	const addBreak = () => {
		return new Promise((resolve) => {
			canvas.insertAdjacentHTML("beforeend", "<br>")
			resolve()
		})
	}

	const whatIAmDoing = async(doing, emoji) => {
		await addBreak()
		await typewriter("••••••••", "#3D3E3D")
		await typewriter("me", "#9CDCFE")
		await typewriter(".", "#D4D4D4")
		await typewriter(doing, "#DCDCAA")
		await typewriter("(", "#D4D4D4")
		await typewriter("\"", "#CE9178")
		await wait(200)
		await typewriter(emoji, "")
		await wait(300)
		await typewriter("\"", "#CE9178")
		await wait(50)
		await typewriter(")", "#D4D4D4")
	}

	const typing = async() => {
		await typewriter("const", "#569CD6")
		await typewriter("•", "#3D3E3D")
		await typewriter("myLife", "#DCDCAA")
		await typewriter("•", "#3D3E3D")
		await wait(50)
		await typewriter("=", "#D4D4D4")
		await typewriter("•", "#3D3E3D")
		await wait(100)
		await typewriter("()", "#D4D4D4")
		await typewriter("•", "#3D3E3D")
		await wait(50)
		await typewriter("=>", "#569CD6")
		await typewriter("•", "#3D3E3D")
		await wait(50)
		await typewriter("{", "#D4D4D4")
		await addBreak()
		await typewriter("••••", "#3D3E3D")
		await typewriter("while", "#C586C0")
		await typewriter("(", "#D4D4D4")
		await typewriter("isAlive", "#DCDCAA")
		await typewriter("())", "#D4D4D4")
		await typewriter("•", "#3D3E3D")
		await typewriter("{", "#D4D4D4")
		await whatIAmDoing("eat", "🍔")
		await whatIAmDoing("move", "🚶")
		await whatIAmDoing("luck", "🍀")
		await whatIAmDoing("people", "👨‍👩‍👧‍👦")
		await whatIAmDoing("code", "💻")
		await whatIAmDoing("music", "🎧")
		await whatIAmDoing("game", "🎮")
		await whatIAmDoing("sleep", "😪")
		await addBreak()
		await typewriter("••••••••", "#3D3E3D")
		await typewriter("if", "#C586C0")
		await typewriter("(", "#D4D4D4")
		await typewriter("isDead", "#DCDCAA")
		await typewriter("())", "#D4D4D4")
		await typewriter("•", "#3D3E3D")
		await typewriter("{", "#D4D4D4")
		await addBreak()
		await typewriter("••••••••••••", "#3D3E3D")
		await typewriter("me", "#9CDCFE")
		await typewriter("•", "#3D3E3D")
		await typewriter("=", "#D4D4D4")
		await typewriter("•", "#3D3E3D")
		await typewriter("null", "#569CD6")
		await addBreak()
		await typewriter("••••••••••••", "#3D3E3D")
		await typewriter("break", "#C586C0")
		await addBreak()
		await ctx.suspend()
		await wait(400)
		await ctx.resume()
		await typewriter("••••••••", "#3D3E3D")
		await typewriter("}", "#D4D4D4")
		await addBreak()
		await ctx.suspend()
		await wait(300)
		await ctx.resume()
		await typewriter("••••", "#3D3E3D")
		await typewriter("}", "#D4D4D4")
		await wait(50)
		await addBreak()
		await wait(100)
		await typewriter("}", "#D4D4D4")
		await addBreak()
		await ctx.suspend()
		await wait(1000)
		await ctx.resume()
		await typewriter("myLife", "#DCDCAA")
		await typewriter("()", "#D4D4D4")
	}

	canvas.addEventListener("click", async() => {
		if (isPlay) {
			clearTimeout(timerId)
			canvas.innerHTML = ""
			source.stop()
			isPlay = false
		} else {
			isPlay = true
			const sound = await setUpSound()
			playSound(ctx, sound)
			await typing()
			source.stop()
		}
	})
}
