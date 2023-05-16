let btn = document.querySelector('#burger')
let nav = document.querySelector('#nav')
btn.addEventListener('click', function () { 
	nav.classList.toggle('navigation_active')
})
