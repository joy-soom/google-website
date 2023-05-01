$(function () {
  // scroll change download
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $(".download").addClass("active");
    } else {
      $(".download").removeClass("active");
    }
  });

  /* sitemap Accordion */
  $(".link-item-title").click(function () {
    // $(this).next().slideToggle()
    $(this).next().slideDown();
    $(this).parent().siblings().children(".link-item-content").slideUp();
    // icon rotate
    $(this).addClass("active");
    $(this)
      .parent()
      .siblings()
      .children(".link-item-title")
      .removeClass("active");
  });
});
