// ドロワーメニュー
jQuery(document).ready(function () {
  const $drawerIcon = jQuery("#js-drawer-icon");
  const $drawerContent = jQuery("#js-drawer-content");
  const pcWidth = 768;

  const INDEX_SCROLL = 100;

  function updateDrawerIconVisibility() {
    const scrollTop = jQuery(window).scrollTop();
    const windowWidth = jQuery(window).width();
    const isChecked = $drawerIcon.hasClass("is-checked");

    const isIndex =
      location.pathname === "/" ||
      location.pathname.endsWith("/index.html") ||
      location.pathname.endsWith("/index.php");

    // ドロワーが開いている間は常に表示
    if (isChecked) {
      $drawerIcon.addClass("is-show");
      return;
    }

    // -----------------------------
    // 表示条件
    // -----------------------------

    // indexページ
    if (isIndex) {
      // SP：常に表示
      if (windowWidth < pcWidth) {
        $drawerIcon.addClass("is-show");
        return;
      }

      // PC：100pxスクロールで表示
      if (scrollTop > INDEX_SCROLL) {
        $drawerIcon.addClass("is-show");
      } else {
        $drawerIcon.removeClass("is-show");
      }
      return;
    }

    // index以外：常に表示（画面幅・スクロール無関係）
    $drawerIcon.addClass("is-show");
  }

  // ドロワートグル
  $drawerIcon.on("click", function (e) {
    e.preventDefault();
    $drawerIcon.toggleClass("is-checked");
    $drawerContent.toggleClass("is-checked");

    jQuery("body").toggleClass(
      "is-drawer-open",
      $drawerContent.hasClass("is-checked")
    );

    updateDrawerIconVisibility();
  });

  // ドロワー内リンククリック時に閉じる
  jQuery(".drawer-content__link, .drawer-content__button a").on(
    "click",
    function () {
      $drawerIcon.removeClass("is-checked");
      $drawerContent.removeClass("is-checked");
      jQuery("body").removeClass("is-drawer-open");
      updateDrawerIconVisibility();
    }
  );

  // スクロール・リサイズ時
  jQuery(window).on("scroll resize", updateDrawerIconVisibility);

  // 初期実行
  updateDrawerIconVisibility();
});

// 半透明エリアクリックで閉じる
jQuery("#js-drawer-content").on("click", function () {
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery(this).removeClass("is-checked");
  jQuery("body").removeClass("is-drawer-open");
  jQuery(window).trigger("resize");
});

// ドロワー本体クリックは無効化（閉じない）
jQuery(".drawer-content__menu").on("click", function (e) {
  e.stopPropagation();
});
