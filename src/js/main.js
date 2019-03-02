$(document).ready(function () {
  $('.js-burger-menu').on('click', function () {
    $(this).toggleClass('active')
    $('body').toggleClass('open-menu')
  })

  initMenu()

  function initMenu () {
    $('.js-burger-menu').removeClass('active')
    $('body').removeClass('open-menu')
  }

})

//Sliders

$('.introducing-items').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button class="introducing__slider__btn introducing__slider__prev-btn"><div class="prev-arrow"></div></button>',
  nextArrow: '<button class="introducing__slider__btn introducing__slider__next-btn"><div class="next-arrow"></div></button>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        prevArrow: '<button class="introducing__slider__btn introducing__slider__prev-btn"><div class="prev-arrow"></div></button>',
        nextArrow: '<button class="introducing__slider__btn introducing__slider__next-btn"><div class="next-arrow"></div></button>',
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="introducing__slider__btn introducing__slider__prev-btn"><div class="prev-arrow"></div></button>',
        nextArrow: '<button class="introducing__slider__btn introducing__slider__next-btn"><div class="next-arrow"></div></button>',
      }
    }
  ]
})

$('.video-slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button class="video__slider__btn video__slider__prev-btn"><div class="prev-arrow"></div></button>',
  nextArrow: '<button class="video__slider__btn video__slider__next-btn"><div class="next-arrow"></div></button>'
})