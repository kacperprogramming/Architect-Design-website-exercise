// Pobieramy elementy
const nav = document.querySelector('.nav') // nawigacja
const navMobile = document.querySelector('.nav-mobile') // nawigacja mobilna
const navMobileLinks = document.querySelectorAll('.nav-mobile-item')
const burger = document.querySelector('.navbar__burger') // burger
const navItems = document.querySelectorAll('.navbar__item') // linki w nav
const brand = document.querySelector('.navbar__brand')
const burgerBar = document.querySelectorAll('.navbar__burger-bar')

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
	navItems.forEach(item => item.classList.toggle('active')) // dodaje klasę active do linków
	burger.classList.toggle('active') // możesz użyć do animacji burgera
})

brand.addEventListener('click', e => {
	e.preventDefault() // zatrzymuje domyślne przewijanie
	window.scrollTo({
		top: 0, // przewija na samą górę
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
