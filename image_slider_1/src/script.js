var images = [
		'beach.png',
		'city.png',
		'desert.png',
		'forest.png',
		'mountain.png',
		'mountains.png',
		'snow.png',
	],
	image = document.querySelector('.image'),
	prev = document.querySelector('.prev'),
	next = document.querySelector('.next'),
	num = 0,
	srcs = []
//variables declared above

for (let i in images) {
	srcs.push(`images/${images[i]}`)
}
//adding 'images/'

prev.addEventListener('click', () => {
	if (num < 1) {
		num = images.length - 1
	} else {
		num -= 1
	}
	image.src = srcs[num]
	console.log(num)
})
//when click on the previous button

next.addEventListener('click', () => {
	if (num == images.length - 1) {
		num = 0
	} else {
		num += 1
	}
	image.src = srcs[num]
	console.log(num)
})
//when click on the next button
