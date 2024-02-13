const confirm_button = document.getElementsByClassName('content__button')[0];

// 確認ボタンクリック時の処理
confirm_button.addEventListener('click', () => {
  /*
  正規表現条件
  ・半角数字、半角英字のみ
  ・半角数字、半角英字がそれぞれ一文字以上使用されている
  ・文字数が8~16字以内
  */
  const password_regex = /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
  const password_value = document.getElementsByClassName('content__form')[0].value;
  // formのvalueを正規表現でチェック
  const password_value_checked_result = password_regex.test(password_value);
  const error_text = document.getElementsByClassName('error__text')[0];

  // チェック結果でエラー文言を出し分け
  password_value_checked_result
    ? error_text.style.display = 'none'
    : error_text.style.display = 'block';
});
