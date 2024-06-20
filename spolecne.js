



const menuTlacitko = document.querySelector('#menu-tlacitko');
const menuPolozky = document.querySelector('#menu-polozky');
const ikonka = document.querySelector('.fas');

const zmenaIkony = () => {
	if (menuPolozky.classList.contains('show')) {
		menuPolozky.classList.remove('show');
		ikonka.classList.remove('fa-xmark');
		ikonka.classList.add('fa-bars');
	} else {
		menuPolozky.classList.add('show');
		ikonka.classList.add('fa-xmark');
		ikonka.classList.remove('fa-bars');
	}	
}

menuTlacitko.addEventListener('click', zmenaIkony);

