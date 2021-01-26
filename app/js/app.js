const $vidgetAdd = document.querySelector('.vidget-add')
const $sidebar = document.querySelector('.sidebar')

class Themes {
	constructor(name) {
		this.name = name
	}


	open() {
		document.querySelector('.themes').addEventListener('click', e => {
			if (e.target.nextElementSibling && e.target.nextElementSibling.classList.contains('themes__list')){
				if (e.target.nextElementSibling.classList.contains('themes__list--hide')){
					e.target.nextElementSibling.classList.remove('themes__list--hide')
					e.target.nextElementSibling.classList.add('themes__list--open')
				} else {
					e.target.nextElementSibling.classList.remove('themes__list--open')
					e.target.nextElementSibling.classList.add('themes__list--hide')
				}
			}
		})
	}

	close() {
		alert('CLOSE')
	}
}


const learnJs = new Themes().open()