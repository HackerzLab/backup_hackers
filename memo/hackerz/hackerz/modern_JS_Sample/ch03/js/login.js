// Script 2.3 - login.js

// フォームの送信時に呼び出される関数。
// フォームデータを検証し、Boolean値を返す
function validateForm() {
    'use strict';

    // フォーム要素への参照の取得:
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    // 検証!
    if ( (email.value.length > 0) && (password.value.length > 0) ) {
        return true;
    } else {
      //  alert('フォームをすべて埋めてください！');
        return false;
    }
   
} // validateForm()関数の終わり

// ウィンドウがロードされたら呼び出される関数
// ここではフォームにイベントリスナーを追加する
function init() {
    'use strict';

    // document.getElementById()がここで使用できることを確認
    if (document && document.getElementById) {
        var loginForm = document.getElementById('loginForm');
        loginForm.onsubmit = validateForm;
        console.log('イベントリスナーを割り当てた!');
    }

} // init()関数の終わり

// イベントリスナーをウィンドウのロードイベントに割り当てる
window.onload = init;
