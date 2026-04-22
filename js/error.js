document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact__form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // 画面遷移なし
    let hasError = false;

    // 入力必須チェック（テキスト/セレクト/テキストエリア）
    form.querySelectorAll(".form-text, .form-select, .form-textarea").forEach(function (input) {
      const label = form.querySelector(`label[for="${input.id}"]`);
      if (!input.value.trim()) {
        input.classList.add("is-error");
        if (label) label.classList.add("is-error");
        hasError = true;
      } else {
        input.classList.remove("is-error");
        if (label) label.classList.remove("is-error");
      }
    });

    // チェックボックス確認
    const privacyCheck = form.querySelector(".form-checkbox__input");
    const privacyLabel = privacyCheck.closest(".form-checkbox");
    if (!privacyCheck.checked) {
      privacyLabel.classList.add("is-error");
      hasError = true;
    } else {
      privacyLabel.classList.remove("is-error");
    }


    // エラーがあったらアラート
    if (hasError) {
      alert("必須項目を入力してください。");
      return;
    }

    // 成功時（ダミー送信）
    alert("送信が完了しました。ありがとうございました！");
    form.reset(); // 入力リセット
  });
});
