//burger menu
$(document).ready(function(){
  var link = $('.nav_icon');
  var menu = $('.header__nav');
  link.click(function(){
      link.toggleClass('active');
      menu.toggleClass('opened');
  });
});


/*benefits__slider number*/ 
$('.benefits__slider').each(function(){
	var $status = $('.slides-numbers');
	var $slickElement = $(this);
	$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
			    var i = (currentSlide ? currentSlide : 0) + 1;			   
			    $('.benefits-numbers', slick.$slider.parent()).text(i + '/' + slick.slideCount);
	
        });
      });

//slick benefits
$('.benefits__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '#arrow-next',
  prevArrow: '#arrow-prev', 
  dots: false,
  asNavFor: '.benefits__video',
  responsive: [
    {
        breakpoint: 768,
        settings: {
          asNavFor: '',
        }
    }
]
});
$('.benefits__video').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  asNavFor: '.benefits__slider',
  responsive: [
    {
      breakpoint: 768,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        asNavFor: '',
        variableWidth: true,
        centerMode: true
      }
    }
  ]
});


/*gallery-slider number*/
$('.gallery__images').each(function(){
	var $slickElement = $(this);
	$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
			    var i = (currentSlide ? currentSlide : 0) + 1;			   
			    $('.gallery__numbers', slick.$slider.parent()).text(i + '/' + slick.slideCount);
	
        });
      });

//slick gallery
$('.gallery__images').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '.gallery-next',
  prevArrow: '.gallery-prev', 
  dots: false,
});




//tabs quality
$(function() {
  $('.quality__tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.quality__tabs').find('div.quality__tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
});



/*apartments__tabs*/
$(function() {
  $('.apartments__tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.apartments__tabs').find('div.apartments__tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
  addActiveDescription() ;
});


$('.apartments__tabs__caption li').on('click', function() {
  let apartmentsId = $(this).data('id');
  $('.js-slider').slick('slickUnfilter');
  $('.js-slider').slick('slickFilter', `.apartments-filter-${apartmentsId}`);
  $('.js-slider').slick('slickGoTo', 0);
});


$('.apartments__images').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '.arrow-next',
  prevArrow: '.arrow-prev', 
  dots: false,
  fade: true,
  asNavFor: '.available__cards'
});
$('.available__cards').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  focusOnSelect: true,
  asNavFor: '.apartments__images',
  responsive: [
    {
      breakpoint: 768,
        settings: {
          slidesToShow: 2
      }
    }
  ]
});


$('.available__card').each(function( index, elem){
$(elem).attr('data-price',$(elem).attr('data-price').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
});



$('.available__card').on('click', setDataApartments );
$('.apartments__arrows .arrow-next').on('click', setDataApartments);
$('.apartments__arrows .arrow-prev').on('click', setDataApartments );

function setDataApartments() {
    let price = $('.available__card.slick-current').data('price');
    let square = $('.available__card.slick-current').data('square');
    let quarter = $('.available__card.slick-current').data('quarter');
    let benefitsList = $('.available__card.slick-current').find('.benefits-list').html();
    //$(this).toggleClass('active');
    $('.apartments__description').addClass('active');
    $('.apartments__price .price').html(price);
    $('.apartments__square .square').html(square);
    $('.apartments__quarter .quarter').html(quarter);
    $('.apartments__benefits').html(benefitsList);
}

function addActiveDescription() {
  // $('.available__cards .available__card').first().addClass('active');
  // console.log($('.available__cards .slick-current').attr('data-price'));
  $('.apartments__price .price').html($('.available__cards .slick-current').attr('data-price'));
  $('.apartments__square .square').html($('.available__cards .slick-current').attr('data-square'));
  $('.apartments__quarter .quarter').html($('.available__cards .slick-current').attr('data-quarter'));
  $('.apartments__benefits').html($('.available__cards .slick-current').find('.benefits-list').html());
}



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


//.progress-slider
$('.progress-slider__cards').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  nextArrow: '.next',
  prevArrow: '.prev',
  draggable: false
});
$('.progress-slider__images').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="56" height="16" viewBox="0 0 56 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M55.7071 8.70711C56.0976 8.31658 56.0976 7.68342 55.7071 7.29289L49.3431 0.928933C48.9526 0.538408 48.3195 0.538408 47.9289 0.928933C47.5384 1.31946 47.5384 1.95262 47.9289 2.34315L53.5858 8L47.9289 13.6569C47.5384 14.0474 47.5384 14.6805 47.9289 15.0711C48.3195 15.4616 48.9526 15.4616 49.3431 15.0711L55.7071 8.70711ZM55 7L-8.74228e-08 7L8.74228e-08 9L55 9L55 7Z" fill="white"/></svg></button>',
  prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="56" height="16" viewBox="0 0 56 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 7.2929C-0.0976296 7.68342 -0.0976295 8.31659 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95263 8.46159 1.31946 8.07107 0.928936C7.68054 0.538412 7.04738 0.538412 6.65685 0.928937L0.292892 7.2929ZM56 7L1 7L1 9L56 9L56 7Z" fill="black"/></svg></button>'
});
$('.next__stock').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '.arrow-next',
  prevArrow: '.arrow-prev', 
  dots: false,
  asNavFor: '.next__stock__content'
});
$('.next__stock__content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  asNavFor: '.next__stock'
});


//popup
$(document).ready(function(){
  PopUpHide();
});
function PopUpShow(){
  $("#popup").show();
}
function PopUpHide(){
  $("#popup").hide();
  $("#video__popup").hide();
}


//responsive slider
let flag = true;

$(window).on('resize', function(){

  if ($(this).width() < 569 && flag) {
    flag = false;
    $('.js-slick-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      variableWidth: true,
      centerMode: true,
      arrows: false,
      dots: false
    });
    $('.btn-txt').html('→');
  }
  else if ($(this).width() > 568 && !flag) {
    flag = true;
    $('.js-slick-slider').slick('unslick');
  }

}).resize();


$(window).on('resize', function(){
  if ($(this).width() < 980 && flag) {
    flag = false;
    $('.way').removeClass('way');
    $('.wow').removeClass('wow');
    $('.animate__animated').removeClass('animate__animated');
    $('.animate__fadeInUp').removeClass('animate__fadeInUp');
  }
}).resize();

/*animation*/
var controller = new ScrollMagic.Controller();

$('.way').waypoint({
  handler: function() {
    $(this.element).addClass('way__active')
  },
  offset: '80%',
});


new WOW().init();