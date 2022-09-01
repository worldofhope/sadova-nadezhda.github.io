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
  fade: true,
  asNavFor: '.advantages__slider-txt',
  arrows: false
});
$('.structure__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="20" transform="matrix(-1 0 0 1 20 20)" fill="white"/><path d="M17 10L27 20L17 30" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="white"/><path d="M23 10L13 20L23 30" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  dots: false,
  responsive: [
    {
      breakpoint: 568,
      settings: {
        arrows: false,
        dots: true
      }
    }
  ]
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

let flag = true;
$(window).on('resize', function(){
  if ($(this).width() < 569 && flag) {
    flag = false;
    $('.js-slick-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 2000,
      arrows: false,
      adaptiveHeight: true,
      variableWidth: true,
      dots: true
    });
  }
  else if ($(this).width() > 568 && !flag) {
    flag = true;
    $('.js-slick-slider').slick('unslick');
  }
}).resize();
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

/*hide/show*/
$(function() {
  $("#btn-hide").click(function() {
    $(".hidden").hide();
    $("#btn-hide").hide();
    $("#btn-display").show();
  });
  $("#btn-display").click(function() {
    $(".hidden").show();
    $("#btn-hide").show();
    $("#btn-display").hide();
  });
});


/* select */
let formFilter = document.querySelector('.projects__form');
let selectCity = document.querySelector('.city');
let selectLoca = document.querySelector('.location');
if(formFilter){
  selectCity.addEventListener('change', () => {
  let optionCity = document.querySelector('.city option:checked');
  let optionLoca = document.querySelectorAll('.location option');
  optionLoca.forEach(item => {
    if(item.getAttribute("data-city") == optionCity.getAttribute("data-city")) {
      item.style.display = "block";
    }
    else {
      item.style.display = "none";
    }
  })
  });
}

/*form*/
function submitForm() {
  $('#form_loader').show()
}
$(document).ready(function(){
  PopUpHide();
});
function PopUpShow(){
  $("#popup").show();
}
function PopUpHide(){
  $("#popup").hide();
}
$(document).ready(function() {
  $(".projects__form").change(function(){
      $(".filter-btn").addClass('active')
  });
});
$('#popup').on("click", function(event){
  var target = event.target;
  if ($(target).hasClass('popup')){
    PopUpHide()
  }
});

// input mask tel
$.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos)
  } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange()
      range.collapse(true)
      range.moveEnd('character', pos)
      range.moveStart('character', pos)
      range.select()
  }
}
$('input[type="tel"]').click(function() {
  $(this).setCursorPosition(3);
}).mask('+7 (999) 999 99 99');
