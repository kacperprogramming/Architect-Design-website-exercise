const nav = document.querySelector('.nav') 
const navMobile = document.querySelector('.nav-mobile')
const navMobileLinks = document.querySelectorAll('.nav-mobile-item')
const burger = document.querySelector('.navbar__burger') 
const navItems = document.querySelectorAll('.navbar__item') 
const brand = document.querySelector('.navbar__brand')
const burgerBar = document.querySelectorAll('.navbar__burger-bar')
const footerYear = document.querySelector('.footer__year')

// Funkcja zmieniająca tło i kolory po scrollu
window.addEventListener('scroll', () => {
	if (window.scrollY > 100) {
		nav.classList.add('scrolled')
	} else {
		nav.classList.remove('scrolled')
	}
})

// Toggle menu mobilnego
burger.addEventListener('click', () => {
	navItems.forEach(item => item.classList.toggle('active'))
	burger.classList.toggle('active')
})

brand.addEventListener('click', e => {
	e.preventDefault() // zatrzymuje domyślne przewijanie
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
})

// funkcja otwierania/zamykania menu
// funkcja otwierania/zamykania menu
burger.addEventListener('click', () => {
	navMobile.classList.toggle('active')

	// toggle klasy 'burger-black' na każdym pasku
	burgerBar.forEach(bar => {
		bar.classList.toggle('burger-black')
	})
})

// zamknięcie menu po kliknięciu w link
navMobileLinks.forEach(link => {
	link.addEventListener('click', () => {
		navMobile.classList.remove('active')
	})
})

navMobileLinks.forEach(link => {
	link.addEventListener('click', () => {
		navMobile.classList.remove('active')
		burgerBar.forEach(bar => {
			bar.classList.remove('burger-black')
		})
	})
})

// nawigacja zawsze na 100% vh na telefonach

function setNavHeight() {
	navMobile.style.height = `${window.innerHeight}px`
}

window.addEventListener('resize', setNavHeight)
window.addEventListener('load', setNavHeight)

// automatyczna data w footerze

footerYear.textContent = new Date().getFullYear();
