// SLICK JS для слайдера на сторінці Готель -- доданий С. Руденком
$('.slider-2pictures').slick({
  mobileFirst: true,
  // centerMode: true,
  // centerPadding: '0px',
  slidesToShow: 2,
  adaptiveHeight: true,
  // prevArrow: '<button type="button" class="slick-prev"><img src="./images/arrow-r.svg"/></button>',
       // nextArrow: "<img src='https://svgshare.com/i/6Gf.svg' class='next' alt='2'>",
});

$('.slider-2pictures-invert').slick({
  mobileFirst: true,
  // centerMode: true,
  // centerPadding: '5px',
  slidesToShow: 2,
  adaptiveHeight: true,
  // prevArrow:
});

$('.slider-about').slick({
  mobileFirst: true,
  // centerMode: true,
  // centerPadding: '5px',
  slidesToShow: 2,
  // adaptiveHeight: true,
  // infinite: false,
  variableWidth: true,
});
