//burger menu
var link = document.querySelector('.nav_icon');
var menu = document.querySelector('.header__nav');
var cls = document.querySelector('main');
link.addEventListener('click', function () {
  link.classList.toggle('active');
  menu.classList.toggle('opened');
}, false);
cls.addEventListener('click', function () {
  link.classList.remove('active');
  menu.classList.remove('opened');
}, false);


/*menu dropdown*/
let listMenu = document.querySelector('.header__list');

if (listMenu) {
  listMenu.addEventListener('click', e => {
    let target = e.target;
    console.log(target)
    if (target.classList.contains('dropdown__link')) {
      let itemDrop = target.closest('.header__dropdown');
      let linkDrop = itemDrop.querySelector('.dropdown__link');
      let listDrop = itemDrop.querySelector('.dropdown-list');
      linkDrop.classList.toggle('active');
      listDrop.classList.toggle('dropdown');
    }
  })
}
/* tabs*/
$(function() {
  $('ul.astana__list').on('click', 'li:not(.active)', function() {
    $(this).addClass('active').siblings().removeClass('active')
    $('.section').removeClass('active').eq($(this).index()).addClass('active');
  });
});



  /*slick slider gallery*/
  
  // $('.slider-for').slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   nextArrow: '<button type="button" class="slick_arrow slick_next"></button>',
  //   prevArrow: '<button type="button" class="slick_arrow slick_prev"></button>',
  //   fade: true,
  //   asNavFor: '.slider-nav'
  //   });
  //   $('.slider-nav').slick({
  //   infinite: true,
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  //   asNavFor: '.slider-for',
  //   dots: false,
  //   arrows: false,
  //   centerMode: true,
  //   focusOnSelect: true
  //   });

  /*swiper*/
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });


/*Fancybox*/
Fancybox.bind('[data-fancybox="gallery"]', {
  dragToClose: false,

  Toolbar: false,
  closeButton: "top",

  Image: {
    zoom: false,
  },

  on: {
    initCarousel: (fancybox) => {
      const slide = fancybox.Carousel.slides[fancybox.Carousel.page];

      fancybox.$container.style.setProperty(
        "--bg-image",
        `url("${slide.$thumb.src}")`
      );
    },
    "Carousel.change": (fancybox, carousel, to, from) => {
      const slide = carousel.slides[to];

      fancybox.$container.style.setProperty(
        "--bg-image",
        `url("${slide.$thumb.src}")`
      );
    },
  },
});  

document.addEventListener('contextmenu', e => {
  e.preventDefault();
});