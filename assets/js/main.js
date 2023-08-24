(function ($) {
	"use strict";

	// Header Sticky
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 120) {
			$(".navbar-area").addClass("is-sticky");
		}
		else {
			$(".navbar-area").removeClass("is-sticky");
		}
	});

	// Navbar Menu JS
	$('.navbar .navbar-nav li a').on("click", function (e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 65
		}, 1500);
		e.preventDefault();
	});

	// Header Sticky Two
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 120) {
			$(".navbar-area-two").addClass("is-sticky");
		}
		else {
			$(".navbar-area-two").removeClass("is-sticky");
		}
	});

	// Search Popup JS
	$(".close-btn").on("click", function () {
		$('.search-overlay').fadeOut();
		$('.search-btn').show();
		$('.close-btn').removeClass('active');
	});
	$(".search-btn").on("click", function () {
		$(this).hide();
		$('.search-overlay').fadeIn();
		$('.close-btn').addClass('active');
	});

	// Mean Menu
	jQuery(".mean-menu").meanmenu({
		meanScreenWidth: "991"
	});

	// Odometer JS
	$(".odometer").appear(function (e) {
		var odo = $(".odometer");
		odo.each(function () {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

	// Nice Select JS
	$("select").niceSelect();

	// Popup Video
	$(".popup-youtube").magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// Tabs
	$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
	$('.tab ul.tabs li a').on('click', function (g) {
		var tab = $(this).closest('.tab'),
			index = $(this).closest('li').index();
		tab.find('ul.tabs > li').removeClass('current');
		$(this).closest('li').addClass('current');
		tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
		tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
		g.preventDefault();
	});

	// Partner-slider
	$('.partner-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		smartSpeed: 2000,
		margin: 30,
		autoplayHoverPause: true,
		autoplay: true,
		responsive: {
			0: {
				items: 4
			},
			576: {
				items: 5
			},
			768: {
				items: 7
			},
			1200: {
				items: 7
			}
		}
	});

	// Progress Bar JS
	$('.circlechart').circlechart();

	// Testimonial-slides
	$('.saying-slides').owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		// loop: true,
		// nav: true,
		// dots: true,
		smartSpeed: 2000,
		// margin: 30,
		// active: true,
		// autoplayHoverPause: true,
		autoplay: true,
		responsive: {
			0: {
				items: 1,
				nav: true,
			},
			576: {
				items: 1,
				nav: true,
			},
			768: {
				items: 2.5,
				nav: true,
			},
			1200: {
				items: 4.5,
				nav: true,
			}
		}
	});

	// Freelancer Project Slider
	$('.freelancer-project-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		smartSpeed: 2000,
		margin: 30,
		center: true,
		active: true,
		autoplayHoverPause: true,
		autoplay: true,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			1200: {
				items: 2
			}
		}
	});



	// Freelancer Client Slider
	$('.freelancer-client-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		items: 1,
		autoplayHoverPause: true,
		autoplay: true,
	});

	// FAQ Accordion
	$('.accordion').find('.accordion-title').on('click', function () {
		// Adds Active Class
		$(this).toggleClass('active');
		// Expand or Collapse This Panel
		$(this).next().slideToggle('fast');
		// Hide The Other Panels
		$('.accordion-content').not($(this).next()).slideUp('fast');
		// Removes Active Class From Other Titles
		$('.accordion-title').not($(this)).removeClass('active');
	});

	// Input Plus & Minus Number JS
	$('.input-counter').each(function () {
		var spinner = jQuery(this),
			input = spinner.find('input[type="text"]'),
			btnUp = spinner.find('.plus-btn'),
			btnDown = spinner.find('.minus-btn'),
			min = input.attr('min'),
			max = input.attr('max');

		btnUp.on('click', function () {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
		btnDown.on('click', function () {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

	// Made by vipul mirajkar thevipulm.appspot.com
	var TxtType = function (el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	};
	TxtType.prototype.tick = function () {
		var i = this.loopNum % this.toRotate.length;
		var fullTxt = this.toRotate[i];

		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}
		this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
		var that = this;
		var delta = 200 - Math.random() * 100;
		if (this.isDeleting) { delta /= 2; }
		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}
		setTimeout(function () {
			that.tick();
		}, delta);
	};

	window.onload = function () {
		var elements = document.getElementsByClassName('typewrite');
		for (var i = 0; i < elements.length; i++) {
			var toRotate = elements[i].getAttribute('data-type');
			var period = elements[i].getAttribute('data-period');
			if (toRotate) {
				new TxtType(elements[i], JSON.parse(toRotate), period);
			}
		}
		// INJECT CSS
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
		document.body.appendChild(css);
	};

	// Count Time 
	function makeTimer() {
		var endTime = new Date("September 30, 2020 17:00:00 PDT");
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400);
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
	setInterval(function () { makeTimer(); }, 1000);

	// Go to Top
	// Scroll Event
	$(window).on('scroll', function () {
		var scrolled = $(window).scrollTop();
		if (scrolled > 600) $('.go-top').addClass('active');
		if (scrolled < 600) $('.go-top').removeClass('active');
	});
	// Click Event
	$('.go-top').on("click", function () {
		$("html, body").animate({ scrollTop: "0" }, 500);
	});

	// WOW JS
	new WOW().init();

}(jQuery));




// *****************************************Custom Js *****************************************
// *******************************************************************************************

// banner-slider
$('.banner-Slider').owlCarousel({
	loop: true,
	nav: false,
	dots: true,
	// animateOut: 'fadeOut',
	// animateIn: 'fadeIn',
	smartSpeed: 2000,
	margin: 0,
	autoplayHoverPause: true,
	autoplay: true,
	responsive: {
		0: {
			items: 1
		},
		576: {
			items: 1
		},
		768: {
			items: 1
		},
		1200: {
			items: 1
		}
	}
});

$('.galary').owlCarousel({
	loop: true,
	// nav: true,
	dots: false,
	// animateOut: 'fadeOut',
	// animateIn: 'fadeIn',
	smartSpeed: 2000,
	margin: 25,
	autoplayHoverPause: true,
	autoplay: true,
	responsive: {
		0: {
			items: 1,
			nav: true,
		},
		576: {
			items: 2,
			nav: true,
		},
		768: {
			items: 4,
			nav: true,
		},
		1200: {
			items: 4,
			nav: true,
		}
	}
});

$('.exclusive').owlCarousel({
	loop: true,
	// nav: true,
	dots: false,
	// animateOut: 'fadeOut',
	// animateIn: 'fadeIn',
	smartSpeed: 2000,
	margin: 20,
	autoplayHoverPause: true,
	autoplay: true,
	responsive: {
		0: {
			items: 1,
			nav: true,
		},
		576: {
			items: 2,
			nav: true,
		},
		768: {
			items: 3,
			nav: true,
		},
		1200: {
			items: 3,
			nav: true,
		}
	}
});

// Client Wrap Slider
$('.client-wrap').owlCarousel({
	items: 1,
	loop: true,
	nav: false,
	dots: true,
	// animateOut: 'fadeOut',
	// animateIn: 'fadeIn',
	smartSpeed: 2000,
	margin: 30,
	center: true,
	active: true,
	autoplayHoverPause: true,
	autoplay: true
});


//increase decrease font  size js

var $affectedElements = $("p, h1, h2, h3, h4, h5, h6"); // Can be extended, ex. $("div, p, span.someClass")

// Storing the original size in a data attribute so size can be reset
$affectedElements.each(function () {
	var $this = $(this);
	$this.data("orig-size", $this.css("font-size"));
});

$("#btn-increase").click(function () {
	changeFontSize(5);
})

$("#btn-decrease").click(function () {
	changeFontSize(-5);
})

$("#btn-orig").click(function () {
	$affectedElements.each(function () {
		var $this = $(this);
		$this.css("font-size", $this.data("orig-size"));
	});
})

function changeFontSize(direction) {
	$affectedElements.each(function () {
		var $this = $(this);
		$this.css("font-size", parseInt($this.css("font-size")) + direction);
	});
}


// Theme Color change js 
// function orange() {
// 	document.body.style.backgroundColor="#1A1917"
// }
// function color() {
//     document.getElementById('color').style.color='#FEF500 !important';
// }

// function white() {
// 	document.body.style.backgroundColor="#fff"
// }


// $(document).ready(function(){
// 	/*toggle class*/
// 		  $("#toggleclass_btn").click(function() {
// 			  $('#target_elm').toggleClass('stylediv');
// 		  });
// });

// ***********color switcher********************
$('#colorDark').click(switchGray);
$('#colorWhite').click(switchWhite);

function switchGray() {
	$('body').attr('class', 'gray');
}

function switchWhite() {
	$('body').attr('class', 'white');
}
// ***********color switcher end********************

// ***********side nav********************
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}
// ***********side nav end********************


// activity-slider
$('.activity-Slider').owlCarousel({
	loop: true,
	nav: false,
	dots: false,
	smartSpeed: 2000,
	margin: 10,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	autoplayHoverPause: true,
	autoplay: true,
	responsive: {
		0: {
			items: 1
		},
		576: {
			items: 2
		},
		768: {
			items: 3
		},
		1200: {
			items: 5
		}
	}
});

$('.product-Slider').owlCarousel({
	loop: true,
	nav: true,
	dots: false,
	smartSpeed: 2000,
	margin: 30,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	autoplayHoverPause: true,
	autoplay: true,
	responsive: {
		0: {
			items: 2,
		},
		576: {
			items: 3,
		},
		768: {
			items: 4,
		},
		1200: {
			items: 7,
		}
	}
});


// light-box
// $('.owl-carousel').owlCarousel({
// 	loop: true,
// 	margin: 10,
// 	nav: true,
// 	startPosition: 2,
// 	responsive: {
// 		0: {
// 			items: 1
// 		},
// 		600: {
// 			items: 3
// 		},
// 		1000: {
// 			items: 5
// 		}
// 	}
// })


$('.Gallery-Sliders').owlCarousel({
	loop: true,
	nav: false,
	dots: false,
	smartSpeed: 2000,
	margin: 10,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	autoplayHoverPause: true,
	autoplay: true,
	responsive: {
		0: {
			items: 2.5,
			
		},
		576: {
			items: 2.5,
			
		},
		768: {
			items: 3.5,
			
		},
		1200: {
			items: 5.5,
			
		}
	}
});


// countdown-slider
$('.countdown-slider').owlCarousel({
	loop: true,
	nav: false,
	dots: false,
	smartSpeed: 2000,
	margin: 10,
	autoplayHoverPause: true,
	autoplay: true,
	responsive: {
		0: {
			items: 2
		},
		576: {
			items: 3
		},
		768: {
			items: 6
		},
		1200: {
			items: 10
		}
	}
});

// News fade-in fade-out
(function ($) {
	$.fn.dropdown = function (opts) {
		// default configuration
		var config = $.extend({}, {
			fadeInTime: 800,
			fadeOutTime: 800,
			interval: 5600
		}, opts);
		// main function
		function init(obj) {
			var dNewsticker = obj;
			var dFrame = dNewsticker.find('.js-frame');
			var dItem = dFrame.find('.js-item');
			var dCurrent;
			var stop = false;

			dItem.eq(0).addClass('current');
			dItem.eq(0).show();

			var move = setInterval(function () {
				if (!stop) {
					dCurrent = dFrame.find('.current');
					dCurrent.fadeOut(config.fadeOutTime, function () {
						if (dCurrent.next().length !== 0) {
							dCurrent.removeClass('current');
							dCurrent.next().addClass('current');
							dCurrent.next().fadeIn(config.fadeInTime);
						}
						else {
							dCurrent.removeClass('current');
							dItem.eq(0).addClass('current');
							dItem.eq(0).fadeIn(config.fadeInTime);
						}
					});
				}
			}, config.interval);

			dNewsticker.on('mouseover mouseout', function (e) {
				if (e.type == 'mouseover') {
					stop = true;
				}
				else {
					stop = false;
				}
			});
		}
		// initialize every element
		this.each(function () {
			init($(this));
		});
		return this;
	};
	// start
	$(function () {
		$('.js-newsticker').dropdown();
	});
})(jQuery);


// menu extended 

// $ (function() {
// 	$('.mot li span').each(function() {
// 		$(this).data('width',math.round($(this).outerwidth())).css({'width':0});
// 	});
// 	$('.mot li').hover(function(){
// 		var $span = $('span',this);
// 		$span.css({'width': $span.data('width') + 5});
// 	}, function() {
// 		var $span = $('span', this);
// 		$span.css({'width':0})
// 	});
// })

// news-slider
$('.news-Slider').owlCarousel({
	loop: true,
	nav: true,
	dots: false,
	// animateOut: 'fadeOut',
	// animateIn: 'fadeIn',
	smartSpeed: 1000,
	margin: 30,
	autoplayHoverPause: true,
	autoplay: true,
	responsive: {
		0: {
			items: 1
		},
		576: {
			items: 2
		},
		768: {
			items: 2
		},
		1200: {
			items: 3
		}
	}
});

// Publication_Reports-slider
$('.Publication_Reports-Slider').owlCarousel({
	loop: true,
	nav: true,
	dots: false,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	smartSpeed: 1000,
	margin: 30,
	autoplayHoverPause: true,
	autoplay: true,
	responsive: {
		0: {
			items: 1
		},
		576: {
			items: 2
		},
		768: {
			items: 3
		},
		1200: {
			items: 3
		}
	}
});


// Indians_Summits-slider
$('.Indians_Summits-Slider').owlCarousel({
	loop: true,
	nav: true,
	dots: false,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	smartSpeed: 1000,
	margin: 30,
	autoplayHoverPause: true,
	autoplay: true,
	responsive: {
		0: {
			items: 1
		},
		576: {
			items: 2
		},
		768: {
			items: 3
		},
		1200: {
			items: 3
		}
	}
});

// about-slider
$('.about-Slider').owlCarousel({
	loop: true,
	nav: false,
	dots: false,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	smartSpeed: 1000,
	margin: 30,
	autoplayHoverPause: true,
	autoplay: true,
	responsive: {
		0: {
			items: 1
		},
		576: {
			items: 1
		},
		768: {
			items: 1
		},
		1200: {
			items: 1
		}
	}
});


// autos slider
$(document).ready(function () {
	var sync1 = $("#slider");
	var sync2 = $("#navigation");

	var flag = false;

	var slides = sync1.owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: true,
		nav: false,
		dots: false
	});
	var thumbs = sync2.owlCarousel({

		loop: false,
		margin: 10,
		autoplay: false,
		nav: false,
		dots: false,
		responsiveClass: true,
		addClassActive: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			600: {
				items: 1,
				nav: false
			},
			1000: {
				items: 1,
				nav: false,
				loop: false,
				margin: 20
			}
		},


	}).on('click', '.owl-item', function (e) {
		e.preventDefault();
		sync1.trigger('to.owl.carousel', [$(e.target).parents('.owl-item').index(), 300, true]);
	}).on('change.owl.carousel', function (e) {
		if (e.namespace && e.property.name === 'position' && !flag) {
			//nsole.log('...');
		}
	}).data('owl.carousel');

	// -----------------my script--------------------------------
	var all = $(".side .owl-stage .owl-item ").length;
	console.log(all);
	var height1 = $(".side .owl-stage .owl-item ").height();
	var height = $(".side .owl-stage .owl-item ").height() * 5;
	$(".side .owl-stage").css("height", height + "px");
	var syncposi = $(".side .owl-stage .active").index();
	console.log(syncposi);
	if (syncposi == 0) {
		$(".owl-prev").css({ "pointer-events": "none", "opacity": 0.3 });
	}

	$(".owl-next").click(function () {
		var index = $(".side .owl-stage .active").index();
		if (index > 4 && index <= 22) {
			$('.side .owl-stage').animate({ scrollTop: '+=' + height1 });

		}
		$(".owl-prev").css({ "pointer-events": "auto", "opacity": 1 });
		if (index == 0) {
			$('.side .owl-stage').scrollTop(0);
			console.log("hi");
		}
	});
	$(".owl-prev").click(function () {
		var index = $(".side .owl-stage .active").index();
		if (index > 5) {
			$('.side .owl-stage').animate({ scrollTop: '-=' + height1 });
		}
		if (index < 2) {
			$('.side .owl-stage').animate({ scrollTop: '-=' + height1 * 2 });
		}

		if (index == 0) {
			$(".owl-prev").css({ "pointer-events": "none", "opacity": 0.3 });
		}
	});

	setInterval(function () {
		var syncposi = $(".side .owl-stage .active").index();
		if (syncposi == 0) {
			$(".owl-prev").css({ "pointer-events": "none", "opacity": 0.3 });
		}
	}, 100);
	/*fancybox*/
	$('.fancybox').fancybox();

});

$('.fancybox-effects-a h1').click(function () {
	$('.fancybox-effects-a h1').removeClass('active');
	$(this).addClass('active');
});



$(document).ready(function () {

	var current_fs, next_fs, previous_fs; //fieldsets
	var opacity;
	var current = 1;
	var steps = $("fieldset").length;

	setProgressBar(current);

	$(".next").click(function () {

		current_fs = $(this).parent();
		next_fs = $(this).parent().next();

		//Add Class Active
		$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

		//show the next fieldset
		next_fs.show();
		//hide the current fieldset with style
		current_fs.animate({ opacity: 0 }, {
			step: function (now) {
				// for making fielset appear animation
				opacity = 1 - now;

				current_fs.css({
					'display': 'none',
					'position': 'relative'
				});
				next_fs.css({ 'opacity': opacity });
			},
			duration: 500
		});
		setProgressBar(++current);
	});

	$(".previous").click(function () {

		current_fs = $(this).parent();
		previous_fs = $(this).parent().prev();

		//Remove class active
		$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

		//show the previous fieldset
		previous_fs.show();

		//hide the current fieldset with style
		current_fs.animate({ opacity: 0 }, {
			step: function (now) {
				// for making fielset appear animation
				opacity = 1 - now;

				current_fs.css({
					'display': 'none',
					'position': 'relative'
				});
				previous_fs.css({ 'opacity': opacity });
			},
			duration: 500
		});
		setProgressBar(--current);
	});

	function setProgressBar(curStep) {
		var percent = parseFloat(100 / steps) * curStep;
		percent = percent.toFixed();
		$(".progress-bar")
			.css("width", percent + "%")
	}

	$(".submit").click(function () {
		return false;
	})

});


// tooltip toggle
// function toggleText(){
//   var x = document.getElementById("Myid");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// } 


//------------------ google map-------------------

var LocationsForMap = [
	['Delhi', 28.704060, 77.102493],
	['Jaipur', 26.9124, 75.7873],
	['London', 51.507351, -0.127758],
	['Washington', 47.751076, -120.740135]
];

var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 8,
	center: new google.maps.LatLng(28.704, 77.25),
	mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < LocationsForMap.length; i++) {
	marker = new google.maps.Marker({
		position: new google.maps.LatLng(LocationsForMap[i][1], LocationsForMap[i][2]),
		map: map
	});

	google.maps.event.addListener(marker, 'click', (function (marker, i) {
		return function () {
			infowindow.setContent(LocationsForMap[i][0]);
			infowindow.open(map, marker);
		}
	})(marker, i));
}

// countdown-slider
$('.countdown-Slider').owlCarousel({
	loop: false,
	nav: false,
	dots: false,
	// animateOut: 'fadeOut',
	// animateIn: 'fadeIn',
	smartSpeed: 1000,
	margin: 30,
	autoplayHoverPause: true,
	autoplay: true,
	responsive: {
		0: {
			items: 1,
			loop: true,
			dots: true
		},
		576: {
			items: 3,
			dots: true
		},
		768: {
			items: 4
		},
		1200: {
			items: 5
		}
	}
});


// widget-slider
$('.widget-Slider').owlCarousel({
	loop: false,
	nav: false,
	dots: false,
	// animateOut: 'fadeOut',
	// animateIn: 'fadeIn',
	smartSpeed: 1000,
	margin: 30,
	autoplayHoverPause: true,
	autoplay: true,
	responsive: {
		0: {
			items: 1
		},
		576: {
			items: 2
		},
		768: {
			items: 3
		},
		1200: {
			items: 4
		}
	}
});

// MediaCoverage-slider
$('.MediaCoverage-slider').owlCarousel({
	loop: true,
	nav: false,
	dots: true,
	smartSpeed: 2000,
	margin: 10,
	autoplayHoverPause: true,
	autoplay: true,
	responsive: {
		0: {
			items: 1
		},
		576: {
			items: 1
		},
		768: {
			items: 1
		},
		1200: {
			items: 1
		}
	}
});


// tesi-slider
$('.tesi-Slider').owlCarousel({
	loop: true,
	nav: false,
	dots: false,
	// animateOut: 'fadeOut',
	// animateIn: 'fadeIn',
	smartSpeed: 1000,
	margin: 30,
	autoplayHoverPause: true,
	autoplay: true,
	responsive: {
		0: {
			items: 1
		},
		576: {
			items: 1
		},
		768: {
			items: 1
		},
		1200: {
			items: 1
		}
	}
});




// banner-slider
$('.banners-Slider').owlCarousel({
	loop: true,
	nav: false,
	dots: true,
	// animateOut: 'fadeOut',
	// animateIn: 'fadeIn',
	smartSpeed: 2000,
	margin: 0,
	autoplayHoverPause: true,
	autoplay: true,
	responsive: {
		0: {
			items: 1
		},
		576: {
			items: 1
		},
		768: {
			items: 1
		},
		1200: {
			items: 1
		}
	}
});

















