let timer = {
	hours: Number(document.querySelector('.hours').innerHTML.replace(/0/, '')),
	minutes: Number(document.querySelector('.minutes').innerHTML.replace(/0/, '')),
	seconds: Number(document.querySelector('.seconds').innerHTML.replace(/0/, ''))
}

function letsgooo() {
	setTimeout(() => {
		console.log('s')
		if (timer.seconds !== 0) {
			timer.seconds = timer.seconds - 1
		} else if (timer.minutes !== 0) {
			timer.minutes = timer.minutes - 1
			timer.seconds = 59
		} else if (timer.hours !== 0) {
			timer.hours = timer.hours - 1
			timer.minutes = 59
			timer.seconds = 59
		} else {
			return
		}
		sendTimerValue()
	}, 1000)
}
letsgooo()

function sendTimerValue() {
	document.querySelector('.hours').innerHTML = timer.hours < 10 ? "0" + timer.hours : timer.hours
	document.querySelector('.minutes').innerHTML = timer.minutes < 10 ? "0" + timer.minutes : timer.minutes
	document.querySelector('.seconds').innerHTML = timer.seconds < 10 ? "0" + timer.seconds : timer.seconds
	letsgooo()
}