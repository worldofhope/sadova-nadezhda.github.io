$(document).ready(function(){
  var link = $('.nav_icon');
  var menu = $('.header__nav');
  link.click(function(){
      link.toggleClass('active');
      menu.toggleClass('opened');
  });
});

var header = $(".header");
var scrollChange = 1;
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
        header.addClass('scroll');
    } else {
        header.removeClass("scroll");
    }
});


let flag = true;

$(window).on('resize', function(){
  if ($(this).width() < 569 && flag) {
    flag = false;
    $('.js-slick-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      variableWidth: true,
      dots: true
    });
    $('.btn-txt').html('→');
  }
  else if ($(this).width() > 568 && !flag) {
    flag = true;
    $('.js-slick-slider').slick('unslick');
    $('.btn-txt').html('Смотреть все →');
  }
}).resize();



$(document).ready(function(){
  $('.header__list a').each(function () {
    if (this.href == location.href) {
      $(this).parent().addClass('active');
    }
    else {
      $(this).parent().removeClass('active');
    }
  });
});


  $(document).ready(function(){
    PopUpHide();
  });

  function PopUpShow(){
    $("#popup").show();
  }

  function PopUpHide(){
    $("#popup").hide();
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


