(function($) {
  $(".slider").owlCarousel({
    autoPlay: true,
    slideSpeed : 300,
    paginationSpeed : 400,
    items : 1, 
    itemsDesktop : false,
    itemsDesktopSmall : false,
    itemsTablet: false,
    itemsMobile : false,
  });

  $('.desc').addClass('animated fadeInRightBig');
})(jQuery)