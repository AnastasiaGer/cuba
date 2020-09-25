$(function(){
  $('.photos-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="photos-slider__btn photos-slider__btnprev"><img src="../img/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="photos-slider__btn photos-slider__btnnext"><img src="../img/arrow-right.svg" alt=""></button>',
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });

});
