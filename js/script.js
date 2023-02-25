let requestPopup = document.querySelector('.popup-request');
let mapPopup = document.querySelector('.popup-map');
let bgPopupR = document.querySelector('.popup-request .popup__bg');
let bgPopupM = document.querySelector('.popup-map .popup__bg');
let openRequestPopup = document.querySelector('.header__call-btn');
let openMapPopup = document.querySelector('.header__map-btn');
let closePopupR = document.querySelector('.popup-request .popup__close');
let closePopupM = document.querySelector('.popup-map .popup__close');
let checkbox = document.querySelector('.popup-request__checkbox');
let btnPopup = document.querySelector('.popup-request__btn');
let titlePopup = document.querySelector('.popup-request__title');
let formPopup = document.querySelector('.popup-request__form');
let descrPopup = document.querySelector('.popup-request__descr');
let phone = document.querySelectorAll("input[type='tel']");

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

//закрытие формы
closePopupR.addEventListener('click', function () {
	exitPopup(requestPopup);
});
bgPopupR.addEventListener('click', function () {
	exitPopup(requestPopup);
});

//закрытие popup-карты
closePopupM.addEventListener('click', function () {
	exitPopup(mapPopup);
});
bgPopupM.addEventListener('click', function () {
	exitPopup(mapPopup);
});

function exitPopup(name) {
	name.classList.remove('active');
	document.body.classList.remove('lock');
	if (titlePopup.classList.contains('active')) {
		titlePopup.classList.remove('active');
		titlePopup.innerHTML = "Быстро оставить заявку";
		formPopup.classList.remove('d-none');
		descrPopup.classList.remove('d-none');
	}
}

// маска на телефон
var im = new Inputmask("+ 7 (999) 999-99-99");
im.mask(phone);

// checkbox 
checkbox.addEventListener('click', function () {
	checkbox.classList.toggle('check');

	if (checkbox.classList.contains('check')) {
		btnPopup.classList.remove('disabled');
	} else {
		btnPopup.classList.add('disabled');
	}
})

// отправка формы
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
let callText = document.querySelector('.header__call-text');
let number = document.querySelector('.header__number');
let callBtn = document.querySelector('.header__call-btn');

burger.addEventListener('click', function () {
	burger.classList.toggle('active');
	nav.classList.toggle('active');
	header.classList.toggle('active');
	callText.classList.toggle('active');
	callBtn.classList.toggle('active');
	number.classList.toggle('active');
	document.body.classList.toggle('lock');
})

// закрытие меню если размер окна стал больше мобилки
window.addEventListener('resize', function () {
	if (window.innerWidth > 991.98 && burger.classList.contains('active')) {
		burger.classList.remove('active');
		nav.classList.remove('active');
		header.classList.remove('active');
		callText.classList.remove('active');
		callBtn.classList.remove('active');
		number.classList.remove('active');
		document.body.classList.remove("lock");
	}
});

// прилипание шапки
window.addEventListener('scroll', function () {
	burger.classList.add('fixed');
	header.classList.add('fixed');
	callText.classList.add('fixed');
	callBtn.classList.add('fixed');
	number.classList.add('fixed');

	if (this.window.pageYOffset < 10) {
		burger.classList.remove('fixed');
		header.classList.remove('fixed');
		callText.classList.remove('fixed');
		callBtn.classList.remove('fixed');
		number.classList.remove('fixed');
	}
});

