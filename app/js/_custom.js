

document.addEventListener("DOMContentLoaded", function() {


	var $page = $('html, body');
	$('a[href*="#"]').on('click', (function() {
		$('.menu').removeClass('menu--open')
		$('.header').removeClass('header--open-menu')
	    $page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 20
	    }, 400);
	    return false;
	}));

	var currentNumber
	function sealQuantityUp() {
		currentNumber = $('#input-number').val()*1 + 1;
		if (currentNumber*1 > 0 && currentNumber*1 < 100) {
			$('#input-number').val(currentNumber);
			$('.result-order__amount').html(currentNumber);
			calculate()
		}		
	}

	function sealQuantityDown() {
		currentNumber = $('#input-number').val() - 1;
		if (currentNumber*1 > 0 && currentNumber*1 < 100) {
			$('#input-number').val(currentNumber);
			$('.result-order__amount').html(currentNumber);
			calculate()
		}		
	}

	$(".number-input__up").on('click', function() {
		sealQuantityUp()
	});

	$(".result-order__asc").on('click', function() {
		sealQuantityUp()
	});


	$(".number-input__down").on('click', function() {
		sealQuantityDown()
	});

	$(".result-order__desc").on('click', function() {
		sealQuantityDown()
	});

	$('.header__menu-icon').on('click', function() {
		$('.menu').toggleClass('menu--open')
		$('.header').toggleClass('header--open-menu')
	})


});
