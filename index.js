


  const toggleBtn = document.querySelector('.toggle');
const menu = document.querySelector('.contenedor-menu');
const close = document.querySelector('.menu-close');
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    close.classList.toggle('active');
}); 


$(document).ready(function() {
	$('.menu li:has(ul)').click(function(e) {
		e.preventDefault();

		if($(this).hasClass('activado')) {
			$(this).removeClass('activado');
			$(this).children('ul').slideUp();
		} else {
			$('.menu li ul').slideUp();
			$('.menu li').removeClass('activado');
			$(this).addClass('activado');
			$(this).children('ul').slideDown();
		}

		$('.menu li ul li a').click(function() {
			window.location.href = $(this).attr('href');
		})
	});
});