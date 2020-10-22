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

  	// Slider Brands Vacancy

  	if($('.brands-slider').length) {
  		$('.brands-slider').slick({
			dots: false,
			infinite: true,
			draggable: true,
			pauseOnFocus: false,
			pauseOnHover: false,
			autoplay: true,
			speed: 2300,
			slidesToShow: 4,
			slidesToScroll: 1,
			customPaging : function(slider, i) {
		        var title = $(slider.$slides[i]);
		        return '<button type="button"></button>';
		        },
	        arrows: true,
			prevArrow: '<button id="prev" type="button" class="brands-slider__prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
		    nextArrow: '<button id="next" type="button" class="brands-slider__next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
			responsive: [
			  {
			    breakpoint: 1150,
			    settings: {
			      slidesToShow: 3,
			      slidesToScroll: 1,
			      arrows: false,
			      dots: true
			    }
			  },
			  {
			    breakpoint: 769,
			    settings: {
			      slidesToShow: 2,
			      slidesToScroll: 1,
			      dots: true,
			      arrows: false
			    }
			  },
			  {
			    breakpoint: 577,
			    settings: {
			      slidesToShow: 1,
			      slidesToScroll: 1,
			      dots: true,
			      arrows: false
			    }
			  }
			  // You can unslick at a given breakpoint now by adding:
			  // settings: "unslick"
			  // instead of a settings object
			]
			});
  	}
  	

});