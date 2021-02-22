import $ from "jquery";
import bootstrap from "bootstrap/dist/js/bootstrap";

// Show mobile menu
$('#showMobileMenu').on('click', function () {
  const showClass = 'show';
  if ($('.header-main--menu').hasClass(showClass)) {
    $('.header-main--menu').removeClass(showClass);
    $('body').removeClass('no-scroll');
  } else {
    $('.header-main--menu').addClass(showClass);
    $('body').addClass('no-scroll');
  }
})

// Show mobile menu
$('#hideMobileMenu').on('click', function () {
  const showClass = 'show';
  $('.header-main--menu').removeClass(showClass);
    $('body').removeClass('no-scroll');
})
