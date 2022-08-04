document.addEventListener('DOMContentLoaded', function () {

	new Swiper('.popular-offers__slider', {
		loop: true,
		pagination: {
			el: '.popular-offers__pagination',
			type: 'bullets',
			clickable: true,
		},


		breakpoints: {
			319: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			470: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
			554: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			930: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
			1220: {
				slidesPerView: 4,
				slidesPerGroup: 4,
			},
			1561: {
				slidesPerView: 5,
				slidesPerGroup: 5,
				spaceBetween: 55,
				slideToClickedSlide: true,
			}
		}
	});

	new Swiper('.intro__info-swiper', {
		loop: true,
		pagination: {
			el: '.intro__info-pagination',
			type: 'bullets',
			clickable: true,
		},
		// breakpoints: {
		//    319: {
		//       slidesPerView: 2,
		//       slidesPerGroup: 2,
		//    },
		// }
	});
});

const menuBtn = document.querySelector('.catalog__menu-toggle');
const menu = document.querySelector('.catalog__menu-list');
const menuItem = document.querySelectorAll('.catalog__menu-btn');
console.log(menuBtn)

menuBtn.addEventListener('click', function () {
	menu.classList.toggle('catalog__menu-list--active');
});

menuItem.forEach(function (listItem) {
	listItem.addEventListener('click', function () {
		menu.classList.remove('catalog__menu-list--active');
	});
});


var navigationSelect = document.querySelector('.catalog__menu');

function initSelect(elem) {
	var selectHolder = elem.querySelector('.menu-all-holder ');
	var selectOptions = elem.querySelectorAll('.menu-list-option li');
	var dropHolder = elem.querySelector('.menu-all-dropdown');
	var selectedOption = selectOptions[0];

	selectedOption.classList.add('current');

	selectHolder.addEventListener('click', function () {
		dropHolder.classList.toggle('active');
	});

	selectOptions.forEach(function (currentElement) {
		currentElement.addEventListener('click', function () {
			selectedOption.classList.remove('current');
			selectedOption = currentElement;
			currentElement.classList.add('current');
			selectHolder.innerText = currentElement.textContent;
			dropHolder.classList.toggle('active');
		});
	});
};

initSelect(navigationSelect);



// show more catalog btn// 

const showMore = document.querySelector('.show-more');
const catalogBtn = document.querySelector('.catalog__btn');
const catalogLess = document.querySelector('.catalog__btn-less');


catalogBtn.addEventListener('click', function () {
	showMore.classList.toggle('show-more--active');
	catalogBtn.classList.toggle('catalog__btn--active');
	catalogLess.classList.toggle('catalog__btn-less--active');
});

catalogLess.addEventListener('click', function () {
	showMore.classList.toggle('show-more--active');
	catalogBtn.classList.toggle('catalog__btn--active');
	catalogLess.classList.toggle('catalog__btn-less--active');
});


// Scroll to catalog
(function () {

	const smoothScroll = function (targetEl, duration) {
		const headerElHeight = document.querySelector('.catalog').clientHeight;
		let target = document.querySelector(targetEl);
		let targetPosition = target.getBoundingClientRect().top - headerElHeight;
		let startPosition = window.pageYOffset;
		let startTime = null;

		const ease = function (t, b, c, d) {
			t /= d / 1;
			if (t < 1) return c / 2 * t * t + b;
			t--;
			return -c / 2 * (t * (t - 2) - 1) + b;
		};

		const animation = function (currentTime) {
			if (startTime === null) startTime = currentTime;
			const timeElapsed = currentTime - startTime;
			const run = ease(timeElapsed, startPosition, targetPosition, duration);
			window.scrollTo(0, run);
			if (timeElapsed < duration) requestAnimationFrame(animation);
		};
		requestAnimationFrame(animation);
	};

	const scrollTo = function () {
		const links = document.querySelectorAll('.pure-scroll');
		links.forEach(each => {
			each.addEventListener('click', function () {
				const currentTarget = this.getAttribute('href');
				smoothScroll(currentTarget, 1000);
			});
		});
	};
	scrollTo();
}());