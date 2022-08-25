/*---------- Start burger menu ------------- */
var link = document.querySelector('.nav_icon');
var menu = document.querySelector('.header__nav');
link.addEventListener('click', function () {
  link.classList.toggle('active');
  menu.classList.toggle('opened');
}, false);
/*---------- End burger menu ------------- */


/*counter slide*/
$('.benefits__slider').each(function(){
	var $slickElement = $(this);
	$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;			   
		$('.benefits__number', slick.$slider.parent()).text( '0'+ i + '/0' + slick.slideCount);
  });
});
$('.advantages__slider-txt').each(function(){
	var $slickElement = $(this);
	$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;			   
		$('.advantages__pagin', slick.$slider.parent()).text( '0'+ i + '/0' + slick.slideCount);
  });
});


/*---------- Start slider ------------- */
$('.full__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="20" transform="matrix(-1 0 0 1 20 20)" fill="white"/><path d="M17 10L27 20L17 30" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="white"/><path d="M23 10L13 20L23 30" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  dots: true
});
$('.js-card-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="20" transform="matrix(-1 0 0 1 20 20)" fill="white"/><path d="M17 10L27 20L17 30" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="white"/><path d="M23 10L13 20L23 30" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  dots: false,
  responsive: [
    {
      breakpoint: 1260,
      settings: {
        slidesToShow: 3
      }
  },
  {
    breakpoint: 980,
    settings: {
      slidesToShow: 2,
      arrows: false, 
      dots: true
    }
  },
  {
    breakpoint: 568,
    settings: {
      slidesToShow: 1,
      arrows: false, 
      dots: true
    }
  }
]
});

$('.advantages__slider-txt').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  fade: true,
  cssEase: 'linear',
  asNavFor: '.advantages__slider-img'
});
$('.advantages__slider-img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.advantages__slider-txt',
  arrows: false
});
$('.structure__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="20" transform="matrix(-1 0 0 1 20 20)" fill="white"/><path d="M17 10L27 20L17 30" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="white"/><path d="M23 10L13 20L23 30" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  dots: false
});
$('.benefits__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="20" transform="matrix(-1 0 0 1 20 20)" fill="white"/><path d="M17 10L27 20L17 30" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="white"/><path d="M23 10L13 20L23 30" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  responsive: [
    {
      breakpoint: 1260,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }
  ]
});
/*---------- End slider ------------- */


/*------------ Start Tab Projects ---------------*/
$(function() {
  $('ul.layouts__tabs__caption').on('click', 'li:not(.active)', function() {
    $(this).addClass('active').siblings().removeClass('active')
    $('div.layouts__tabs__contents').find('div.layouts__tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
});
$(function() {
  $('ul.layouts__rooms__caption').on('click', 'li:not(.active)', function() {
    $(this).addClass('active').siblings().removeClass('active')
    $('.layouts__tabs__content.active').find('div.layouts__tabs__room').removeClass('active').eq($(this).index()).addClass('active');
  });
});
/*------------ End Tab Projects ---------------*/

/* accordion */
var acc = document.getElementsByClassName("about__accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}