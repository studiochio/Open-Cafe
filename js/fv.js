document.addEventListener('DOMContentLoaded', function () {
  var fvSliderEl = document.querySelector('.js-fv-slider');
  if (!fvSliderEl || !window.Swiper) return;

  var fvSwiper = new Swiper(fvSliderEl, {
    loop: true,
    slidesPerView: 1,
    speed: 600,
    allowTouchMove: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: 'slide',
    pagination: {
      el: '.js-fv-pagination',
      clickable: true,
    },
  });

  var headerEl = document.querySelector('.header');
  var fvSectionEl = document.getElementById('fv');
  var fvInnerEl = document.querySelector('.fv__inner');
  var fvTitleEl = document.querySelector('.fv__title');
  if (!headerEl || !fvSectionEl || !fvInnerEl || !fvTitleEl) return;

  function applyFvOverlap() {
    var isPc = window.matchMedia('(min-width: 768px)').matches;
    if (isPc) {
      fvSectionEl.style.marginTop = '';
      fvInnerEl.style.paddingTop = '';
      fvTitleEl.style.top = '';
      return;
    }
    var h = headerEl.offsetHeight || 0;
    fvSectionEl.style.marginTop = (-h) + 'px';
    fvInnerEl.style.paddingTop = h + 'px';
    fvTitleEl.style.top = (h + 16) + 'px';
  }

  applyFvOverlap();
  window.addEventListener('resize', applyFvOverlap);
  window.addEventListener('load', applyFvOverlap);
});
