// Loader Page 

var oldWidth = window.innerWidth;
window.onresize = function () {
var newWidth = window.innerWidth;    
	if (newWidth != oldWidth) {        
	    oldWidth = newWidth;
	    window.setTimeout('location.reload()', 200);
	}
}

// Preloader

$(window).on('load', function () {
  var $preloader = $('#preloader');
  $preloader.delay(300).fadeOut('slow');
});

$(function() {
	// Page a Link Smooth Scrolling
	$("[href^='#']").click(function() {
	var idtop = $($(this).attr("href")).offset().top;
	$('html,body').animate(
	  // Time animation
	  {scrollTop: idtop}, 900);
	return false;
	});  

	// Hamburger 

      "use strict";
     
      var toggles = document.querySelectorAll(".c-hamburger");
     
      for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
      };
     
      function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
      		e.preventDefault();
          	(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        });
      }   	

	// Mobile Menu

	$('.c-hamburger').click(function () {
  		$('.menu ').toggleClass('visible-menu');
    });

    // Accordeon 
  

	var el = $('.menu__list li a');  
	el.click(function() {
	var checkedElement = $(this).next(),
	  	visibleElement = $('.dropdown-menu:visible');
	  
	visibleElement.stop().animate({'height':'toggle'}, 500).parent().removeClass('active');   
	if((checkedElement.is('.dropdown-menu')) && (!checkedElement.is(':visible'))) {
	  	checkedElement.stop().animate({'height':'toggle'}, 500).parent().addClass('active');
	  	return false;
	    } 
	if((checkedElement.is('.dropdown-menu')) && (checkedElement.is(':visible'))) {
	  	return false;
	}
	});

   	// Slider Header Home 

	if($('.slider-offer').length) {
	    $('.slider-offer').slick( {
	        speed: 1600,
	      	dots: true,
	      	slidesToShow: 1,
	      	slidesToScroll: 1,
	      	adaptiveHeight: true,
	      	customPaging : function(slider, i) {
	        var title = $(slider.$slides[i]);
	        return '<button type="button"></button>';
	        },
	      	prevArrow:'<button type="button" class="slide-offer-arrows arrow-slide-prev"><i class="fal fa-angle-left"></i></buton>',
	      	nextArrow: '<button type="button" class="slide-offer-arrows arrow-slide-next"><i class="fal fa-angle-right"></i></button>',
	      	responsive: [
	          	{
	          	breakpoint: 1201,
	          	settings: {
	            	dots: false
	          	}
	        }
	      ]
	  });
	};

	 if ($(window).width() <= 992) {
	    $('.menu').insertBefore('.header');
	    $('.header-communication .phone').insertAfter('.menu__list');
  	}

});