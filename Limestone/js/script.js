/*---------- Start menu ------------- */
let header = document.querySelector('.header')
document.addEventListener('scroll', function() {
    let scroll = window.scrollY
    if(scroll > 0) {
         header.classList.add('scroll')
    } else{
        header.classList.remove('scroll')
    }
});

let body = document.querySelector('body');
let link = document.querySelector('.header__icon');
let menu = document.querySelector('.header__nav');
if(menu){
  link.addEventListener('click', function () {
    link.classList.toggle('active');
    menu.classList.toggle('opened');
  }, false);
  window.addEventListener('scroll', () => {
    if (menu.classList.contains('opened')) {
      link.classList.remove('active');
        menu.classList.remove('opened');
    }
  })
  document.addEventListener('click', e => {
    let target = e.target;
    if (!(target.classList.contains('header__nav')) && !(target.classList.contains('header__icon'))) {
        link.classList.remove('active');
        menu.classList.remove('opened');
    }
  })
}
/*---------- End menu ------------- */

/*---------- Start slick ------------- */
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
if (btnPrev && btnNext) {
  if(slideFirst.classList.contains('slick-active')) {
    btnPrev.style.display = 'none'
  }
  $('.gallery__slider').on('afterChange', function() {
    if (!(slideFirst.classList.contains('slick-active'))) {
      btnPrev.style.display = 'block'
    } else {
      btnPrev.style.display = 'none'
    }
    if (!(slideLast.classList.contains('slick-active'))) {
      btnNext.style.display = 'block'
    } else {
      btnNext.style.display = 'none'
    }
    $('.gallery__slider').slick('setPosition');
  });
}
/*---------- End slick ------------- */

/*---------- Start form ------------- */
function submitForm() {
  $('#form_loader').show()
}
function PopUpShow(){
  $("#popup").show();
}
function PopUpHide(){
  $("#popup").hide();
}
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

//alert
let alertt = document.querySelector(".alert--fixed");
let alertClose = document.querySelectorAll(".alert--close")
for (let item of alertClose) {
 item.addEventListener('click', function (event) {
    alertt.classList.remove("alert--active")
   alertt.classList.remove("alert--warning")
   alertt.classList.remove("alert--error")
 })
}
/*---------- End form ------------- */