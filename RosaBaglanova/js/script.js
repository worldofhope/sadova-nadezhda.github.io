//burger menu
var link = document.querySelector('.nav_icon');
var menu = document.querySelector('.header__nav');
var cls = document.querySelector('.main');
link.addEventListener('click', function () {
  link.classList.toggle('active');
  menu.classList.toggle('opened');
}, false);
cls.addEventListener('click', function () {
  link.classList.remove('active');
  menu.classList.remove('opened');
}, false);


let audio = document.querySelector('.activity__cards-audio');
let frameAudio = document.querySelector('.activity__audio-player');
let audioPlayer = document.getElementById("audio");
let anim = document.querySelector('.audio-anim');

/*menu tabs*/
$(function() {
  $('ul.header__list').on('click', 'li:not(.active)', function() {
    $(this).addClass('active').siblings().removeClass('active')
    $('.main').find('section.page').removeClass('active').eq($(this).index()).addClass('active');
    $('.nav_icon').removeClass('active');
    $('.header__nav').removeClass('opened');
    let slickCont = document.querySelector('.public');
    if( slickCont.classList.contains('active') ){
      $('.public__slider').slick('setPosition');
    } 
  });

  $('ul.activity__tabs').on('click', 'li:not(.active)', function() {
    $(this).addClass('active').siblings().removeClass('active')
    $('div.activity__contents').find('div.activity__content').removeClass('active').eq($(this).index()).addClass('active');
    audioPlayer.pause();
  });
});


/*video*/
let video = document.querySelector('.activity__cards-video');
let frameVideo = document.querySelector('.activity__video-preview');
if (video) {
  video.addEventListener('click', e => {
    let target = e.target;
    if(target.classList.contains('activity__card-video')) {
      let linkVideo = target.getAttribute('data-link');
      let linkImg = target.querySelector('.activity__video img').getAttribute('src');
      let info = target.querySelector('.activity__video-txt');
      frameVideo.querySelector('video').setAttribute('src', linkVideo);
      frameVideo.querySelector('.video-js').setAttribute('poster', linkImg);
      frameVideo.querySelector('video').setAttribute('poster', linkImg);
      frameVideo.querySelector('.activity__video-info').innerHTML = info.innerHTML;
    }
  })

}

/*audio*/
if (audio) {
  audio.addEventListener('click', e => {
    let target = e.target;
    if(target.classList.contains('activity__card-audio')) {
      let audioAct = audio.querySelector('.activity__card-audio.active');
      if(audioAct) {
        audioAct.classList.remove('active');
      }
      let linkAudio = target.getAttribute('data-src');
      let infoAudio = target.querySelector('.activity__audio-txt');
      target.classList.add('active');
      frameAudio.querySelector('source').setAttribute('src', linkAudio);
      audioPlayer.load();
      audioPlayer.play();
      anim.classList.add('active');
      frameAudio.querySelector('.activity__audio-info').innerHTML = infoAudio.innerHTML;
    }
  })
}
let audioAct = audio.querySelector('.activity__card-audio.active');
audioPlayer.addEventListener("play", () => {
  anim.classList.add('active');
});
audioPlayer.addEventListener("pause", () => {
  anim.classList.remove('active');
});


/*slider*/
$('.public__slider').slick({
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#4F4F4F" fill-opacity="0.3"/><g clip-path="url(#clip0_29_1224)"><path d="M14.0099 12.3583L22.3225 20L14.0099 27.6417C14.0099 27.6417 13.8558 28.3333 14.7623 29.1667C15.6688 30 16.5753 30 16.5753 30L26.5468 20.8333C26.5468 20.8333 27 20.4167 27 20C27 19.5833 26.5468 19.1667 26.5468 19.1667L16.5753 10C16.5753 10 15.6688 10 14.7623 10.8333C13.8558 11.6667 14.0099 12.3583 14.0099 12.3583Z" fill="white"/></g><defs><clipPath id="clip0_29_1224"><rect width="20" height="20" fill="white" transform="translate(30 10) rotate(90)"/></clipPath></defs></svg></button>',
  prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="20" transform="matrix(-1 0 0 1 20 20)" fill="#4F4F4F" fill-opacity="0.3"/><g clip-path="url(#clip0_125_340)"><path d="M25.9901 12.3583L17.6775 20L25.9901 27.6417C25.9901 27.6417 26.1442 28.3333 25.2377 29.1667C24.3312 30 23.4247 30 23.4247 30L13.4532 20.8333C13.4532 20.8333 13 20.4167 13 20C13 19.5833 13.4532 19.1667 13.4532 19.1667L23.4247 10C23.4247 10 24.3312 10 25.2377 10.8333C26.1442 11.6667 25.9901 12.3583 25.9901 12.3583Z" fill="white"/></g><defs><clipPath id="clip0_125_340"><rect width="20" height="20" fill="white" transform="matrix(0 1 1 0 10 10)"/></clipPath></defs></svg></button>',
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
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