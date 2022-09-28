let header = document.querySelector('.header')
document.addEventListener('scroll', function() {
    let scroll = window.scrollY
    if(scroll > 0) {
         header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
});

/*---------- Start burger menu ------------- */
var link = document.querySelector('.header__icon');
var menu = document.querySelector('.header__nav');
link.addEventListener('click', function () {
  link.classList.toggle('active');
  menu.classList.toggle('opened');
}, false);
/*---------- End burger menu ------------- */

$('.gallery__slider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="25" transform="matrix(-1 0 0 1 25 25)" fill="white"/><path d="M20 15L30 25L20 35" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="25" transform="matrix(-1 0 0 1 25 25)" fill="white"/><path d="M30 15L20 25L30 35" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  dots: false,
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 2
      }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1
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

let slide = document.querySelectorAll('.gallery__slide');
let btnPrev = document.querySelector('.slick_prev');
let btnNext = document.querySelector('.slick_next');
let slideFirst = slide[0];
let slideLast = slide[slide.length - 1] ;


slideFirst.classList.add('slide_first');
slideLast.classList.add('slide_last');

if(slideFirst.classList.contains('slick-active')) {
  btnPrev.style.display = 'none'
}

$('.gallery__slider').on('afterChange', function() {
  if (!(slideFirst.classList.contains('slick-active'))) {
    btnPrev.style.display = 'block'
  } else if(!(slideLast.classList.contains('slick-active'))) {
    btnNext.style.display = 'block'
  }
  $('.gallery__slider').slick('setPosition');
});



