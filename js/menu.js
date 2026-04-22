document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.menu-tab');
  const contents = document.querySelectorAll('.menu-content');
  const items = document.querySelectorAll('.p-menu__item');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const menu = tab.dataset.menu;

      // タブのアクティブ切り替え
      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');

      // menu-content 切り替え
      contents.forEach(content => {
        content.classList.remove('is-show');
        if (content.dataset.menu === 'drink' && menu === 'drink') {
          content.classList.add('is-show');
        }
        if (content.dataset.menu === 'pasta' && menu !== 'drink') {
          content.classList.add('is-show');
        }
      });

      // food の中身を絞る
      items.forEach(item => {
        if (menu === 'drink') {
          item.style.display = 'none';
        } else {
          item.style.display =
            item.dataset.category === menu ? '' : 'none';
        }
      });
    });
  });
});