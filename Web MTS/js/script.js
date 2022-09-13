//burger menu
var link = document.querySelector('.nav_icon');
var menu = document.querySelector('.page__header');
var page = document.querySelector('.page__container');
let clsBtn = document.querySelector('.header__close');
link.addEventListener('click', function () {
  // link.classList.toggle('active');
  menu.classList.add('opened');
}, false);
clsBtn.addEventListener('click', function () {
  menu.classList.remove('opened');
});


/*menu*/
const buttons = document.querySelectorAll('.item__caption');
buttons.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.classList.toggle('open');
    buttons.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('open');
      }
    });
  });
});


/*slider*/
$('.js-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
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
  }
]
});

$('.trust__cards').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="12" transform="matrix(-1 0 0 1 12 12)" fill="white" fill-opacity="0.1"/><path d="M10 5L17 12L10 19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="white" fill-opacity="0.1"/><path d="M14 5L7 12L14 19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  dots: false,
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 4
      }
  },
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

let flag = true;
$(window).on('resize', function(){
  if ($(this).width() < 569 && flag) {
    flag = false;
    $('.js-slider-mb').slick({
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
    $('.js-slider-mb').slick('unslick');
  }
}).resize();


/*marquee*/
$('.marquee').marquee({
  direction: 'left',
  speed: 100,
  duplicated: true
})


/*table*/
document.addEventListener('DOMContentLoaded', function () {
  let btnRgt = document.querySelector('.table__btn-right');
  let btnLft = document.querySelector('.table__btn-left');
  let tableCnt = document.querySelector('.auctions__table__content');
  if (tableCnt) {
    btnRgt.onmouseover = function () {
      let start = Date.now();
      let timer = setInterval(function() {
      let timePassed = Date.now() - start;
      // tableCnt.scrollLeft += tableCnt.clientWidth;
      tableCnt.scrollLeft += 10;
      if (timePassed > 1000) clearInterval(timer);
      if (tableCnt.scrollLeft > 20) {
        btnLft.classList.add('show');
      }
      if (tableCnt.scrollLeft > 1320) {
        btnRgt.classList.remove('show');
      }
      console.log(tableCnt.scrollLeft)
      }, 20);
    };
    btnLft.onmouseover = function () {
      let start = Date.now();
      let timer = setInterval(function() {
      let timePassed = Date.now() - start;
      // tableCnt.scrollLeft -= tableCnt.clientWidth;
      tableCnt.scrollLeft -= 10;
      if (timePassed > 1000) clearInterval(timer);
      if (tableCnt.scrollLeft < 1320) {
        btnRgt.classList.add('show');
      }
      if (tableCnt.scrollLeft < 20) {
        btnLft.classList.remove('show');
      }
      }, 20);
    };
  }
// /*Chart*/
  const canvas = document.querySelector('.chart');
  if(canvas) {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, canvas.width, 0, canvas.height);
    gradient.addColorStop(1, 'rgba(64, 163, 255, 0.5)');
    gradient.addColorStop(0, 'rgba(64, 163, 255, 0)');

    // let labelsArray = ['01.04.2022', '01.05.2022', '01.06.2022', '01.07.2022', '01.08.2022'];
    // let DataArray = [3, 6, 2, 7, 4];

    var newLegendClickHandler = function(e, legendItem, legend) {
      const index = legendItem.datasetIndex;
      const ci = legend.chart;
      if (ci.isDatasetVisible(index)) {
          ci.hide(index);
          legendItem.hidden = true;
      } else {
          ci.show(index);
          legendItem.hidden = false;
      }
    }


    var chart = new Chart(document.querySelector('.chart'),
      {
        type: 'line',
        axisX:{
          labelBackgroundColor: "gray",
          labelFontColor: "white"
        },
        data: {
          labels: ['01.04.2022', '01.05.2022', '01.06.2022', '01.07.2022', '01.08.2022', '01.09.2022'],
          datasets: [
            {
              label: 'Уголь',
              data: [0, 6, 2, 7, 4, 5],
              borderColor: '#40A3FF',
              borderWidth: 2,
              pointBackgroundColor: '#1A2738',
              pointBorderColor: '#40A3FF',
              pointBorderWidth: 2,
              backgroundColor: gradient,
              cubicInterpolationMode: 'monotone',
              fill: true
            },
            {
              label: 'Цемент',
              data: [3, 3, 2, 6, 4, 6],
              borderColor: '#40A3FF',
              borderWidth: 2,
              pointBackgroundColor: '#1A2738',
              pointBorderColor: '#40A3FF',
              pointBorderWidth: 2,
              backgroundColor: gradient,
              cubicInterpolationMode: 'monotone',
              fill: true,
              hidden: true
            },
            {
              label: 'ГСМ',
              data: [1, 3, 7, 6, 4, 2],
              borderColor: '#40A3FF',
              borderWidth: 2,
              pointBackgroundColor: '#1A2738',
              pointBorderColor: '#40A3FF',
              pointBorderWidth: 2,
              backgroundColor: gradient,
              cubicInterpolationMode: 'monotone',
              fill: true,
              hidden: true
            },
            {
              label: 'Картофель',
              data: [3, 3, 2, 0, 4, 5],
              borderColor: '#40A3FF',
              borderWidth: 2,
              pointBackgroundColor: '#1A2738',
              pointBorderColor: '#40A3FF',
              pointBorderWidth: 2,
              backgroundColor: gradient,
              cubicInterpolationMode: 'monotone',
              fill: true,
              hidden: true
            },
            {
              label: 'Сахар',
              data: [3, 1, 3, 6, 4, 7],
              borderColor: '#40A3FF',
              borderWidth: 2,
              pointBackgroundColor: '#1A2738',
              pointBorderColor: '#40A3FF',
              pointBorderWidth: 2,
              backgroundColor: gradient,
              cubicInterpolationMode: 'monotone',
              fill: true,
              hidden: true
            },
            {
              label: 'Пшеница',
              data: [4, 3, 4, 6, 4, 9],
              borderColor: '#40A3FF',
              borderWidth: 2,
              pointBackgroundColor: '#1A2738',
              pointBorderColor: '#40A3FF',
              pointBorderWidth: 2,
              backgroundColor: gradient,
              cubicInterpolationMode: 'monotone',
              fill: true,
              hidden: true
            }
          ]
        },
        options: {
          
          scales: {
            y: {
              beginAtZero: true // назначили оси Y начинать отсчет с нуля
            }
          },
          plugins: {
            legend: {
              display: true,
              align: 'end',
              cursor:"pointer",
              // onClick: (e) => e.stopPropagation(),
              onClick: newLegendClickHandler,
              labels: {
                  color: '#fff',
                  boxWidth: 0,
                  fillStyle: '#fff',
                  strokeStyle: '#fff',
                  font: {
                    size: 12
                }
              }
            }
          },
          layout: {
            padding: 30
          },
          responsive: true
        }
      }
    );
  }
}, false);



/*hide-show*/
$(function() {
  $(".btn-hide").click(function() {
    $(".hidden").css("display", "none");
    $(".btn-hide").css("display", "none");
    $(".btn-display").css("display", "block");
  });
  $(".btn-display").click(function() {
    $(".hidden").css("display", "block");
    $(".btn-hide").css("display", "block");
    $(".btn-display").css("display", "none");
  });
});


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
$('#popup').on("click", function(event){
  var target = event.target;
  if ($(target).hasClass('popup')){
    PopUpHide()
  }
});

let product = document.querySelector('.info-product');
if(product){
  product.addEventListener('change', () => {
  let optionPrd = document.querySelector('.info-product option:checked');
  let prdType = document.querySelectorAll('.product-type')
  prdType.forEach(item => {
    if(item.getAttribute("data-type") == optionPrd.getAttribute("value")) {
      item.style.display = "table-row";
    }
    else {
      item.style.display = "none";
    }
    if(optionPrd.getAttribute("value")== '0') {
      item.style.display = "table-row";
    }
  })


  });
}
