let requestPopup = document.querySelector('.popup-request');
let openRequestPopup = document.querySelector('.header__call-btn');
let mapPopup = document.querySelector('.popup-map');
let openMapPopup = document.querySelector('.header__map-btn');

// открытие формы звонка
openRequestPopup.addEventListener('click', function () {
	requestPopup.classList.add('active');
	document.body.classList.add('lock');
});

// открытие popup-карты
openMapPopup.addEventListener('click', function () {
	mapPopup.classList.add('active');
	document.body.classList.add('lock');
});

// закрытие popup
let popup = document.querySelectorAll('.popup');
popup.forEach(function (value) {
	let close = value.querySelector(".popup__close");
	let bg = value.querySelector(".popup__bg");

	close.addEventListener('click', function () {
		value.classList.remove('active');
		document.body.classList.remove('lock');
	})
	bg.addEventListener('click', function () {
		value.classList.remove('active');
		document.body.classList.remove('lock');
	})
})

// маска на телефон
let phone = document.querySelectorAll("input[type='tel']");
var im = new Inputmask("+ 7 (999) 999-99-99");
im.mask(phone);

// checkbox 
let checkbox = document.querySelector('.popup-request__checkbox');
checkbox.addEventListener('click', function () {
	checkbox.classList.toggle('check');

	if (checkbox.classList.contains('check')) {
		btnPopup.classList.remove('disabled');
	} else {
		btnPopup.classList.add('disabled');
	}
})

// отправка формы
let btnPopup = document.querySelector('.popup-request__btn');
let titlePopup = document.querySelector('.popup-request__title');
let formPopup = document.querySelector('.popup-request__form');
let descrPopup = document.querySelector('.popup-request__descr');

btnPopup.addEventListener('click', function () {
	if (!btnPopup.classList.contains('disabled')) {
		titlePopup.classList.add('active');
		titlePopup.innerHTML = "Спасибо!<br> Ваша заявка отправлена!";
		formPopup.classList.add('d-none');
		descrPopup.classList.add('d-none');
	}
})


// burger
let burger = document.querySelector('.header__burger');
let nav = document.querySelector('.nav');
let header = document.querySelector('.header');

burger.addEventListener('click', function () {
	burger.classList.toggle('active');
	nav.classList.toggle('active');
	header.classList.toggle('active');
	document.body.classList.toggle('lock');
})

// закрытие меню если размер окна стал больше мобилки
window.addEventListener('resize', function () {
	if (window.innerWidth > 991.98 && burger.classList.contains('active')) {
		burger.classList.remove('active');
		nav.classList.remove('active');
		header.classList.remove('active');
		document.body.classList.remove("lock");
	}
});

// прилипание шапки
window.addEventListener('scroll', function () {
	burger.classList.add('fixed');
	header.classList.add('fixed');

	if (this.window.pageYOffset < 10) {
		burger.classList.remove('fixed');
		header.classList.remove('fixed');
	}
});

