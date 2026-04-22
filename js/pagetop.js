//TOPへ戻るボタン スクロールされたら表示
jQuery(window).on("scroll", function () {
  if (100 < jQuery(window).scrollTop()) {
    //100px動いたら表示
    jQuery("#js-pagetop").addClass("is-show");
  } else {
    jQuery("#js-pagetop").removeClass("is-show");
  }
});

jQuery(function () {
  jQuery("#js-pagetop").on("click", function (e) {
    e.preventDefault();
    if (window && window.scrollTo) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      jQuery("html, body").animate({ scrollTop: 0 }, 500);
    }
  });
});
