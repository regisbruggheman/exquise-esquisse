(function($) {
  "use strict"; // Start of use strict

  var navbarCollapse = function() {
    if ($("#navbar-menu").offset().top > 100) {
      $("#navbar-menu").addClass("navbar-shrink");
    } else {
      $("#navbar-menu").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(document).scroll(navbarCollapse);

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery); // End of use strict
