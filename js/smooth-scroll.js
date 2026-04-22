// ========================================
// スムーススクロール機能
// ========================================

jQuery(document).ready(function() {
  // スムーススクロール スマホ（ドロワーメニュー用）
  jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
    jQuery("#js-drawer-icon").removeClass("is-checked");
    jQuery("#js-drawer-content").removeClass("is-checked");
  });

  // スムーススクロール PC・スマホ共通
  jQuery('a[href^="#"]').on("click", function (e) {
    e.preventDefault(); // デフォルトのリンク動作を無効化
    
    const speed = 700;
    const id = jQuery(this).attr("href");
    const target = jQuery("#" == id ? "html" : id);
    
    if (target.length) {
      const position = jQuery(target).offset().top;
      jQuery("html, body").animate(
        {
          scrollTop: position,
        },
        speed,
        "swing" // or linear
      );
    }
  });
});
