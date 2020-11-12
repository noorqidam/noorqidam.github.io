$("#triggerMenuBurger").click(function(){
  $("#triggerMenuBurger").toggleClass("menu--active")
  $(".menu-list").toggleClass("menu-list--show")
  $("#backdrop").toggleClass("backdrop--hide")
  $(".header").toggleClass("header--hide")
  $(".main").toggleClass("main--hide")
  $(".breadcumb").toggleClass("breadcumb--hide")
})

$(window).on('load', function () {
  $('.preloader').addClass('preloader--hide');
  $('body').addClass('body-show');
});

var swiper = new Swiper('.swiper-container', {
  // spaceBetween: 30,
  // hashNavigation: {
  //   watchState: true,
  // },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});