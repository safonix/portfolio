const burger = document.querySelector('.burger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

const counters = document.querySelectorAll('.stack__ratings-counter'),
	lines = document.querySelectorAll('.stack__ratings-line span')

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});

