$(document).ready(function() {
  var $projects = $('.projects');

  function init() {
      $('.projects').on("click", ".collapsible", toggleCollaspible);
      //$(window).on('resize', function())
  }

  function toggleCollaspible (e) {
    var $button = $(this);
    var $wrapper = $button.parent().next();
    var $content = $wrapper.children();

    if ($wrapper.hasClass('open')) {
      $wrapper.removeClass('open');
      $wrapper.height(0);
    } else {
      $wrapper.addClass('open');
      $wrapper.height($content.outerHeight(true));
    }
  }

  init();


});
