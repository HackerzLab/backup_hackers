// Script 2.3 - login.js

// フォームの送信時に呼び出される関数。
// フォームデータを検証し、Boolean値を返す
function validateForm() {
    'use strict';

    alert('ここはvalidateForm()関数内!');
     console.log('ここはvalidateForm()関数内!');
    
    // フォーム要素への参照の取得:
    var email = document.getElementById('email');
    console.log('email変数の値は : ' + email.value);

    var password = document.getElementById('password');
    console.log('password変数の値は : ' + password.value);
    
    // 検証!
    if ( (email.value.length > 0) && (password.value.length > 0) ) {
        return true;
    } else {
        alert('フォームをすべて埋めてください！');
        return false;
    }
} // validateForm()関数の終わり

// ウィンドウがロードされたら呼び出される関数
// ここではフォームにイベントリスナーを追加する
function init() {
    'use strict';
    
     //console.log('ここはinit()関数内!');
     //console.log(2);

    // console.trace();

    // document.getElementById()が使用できることを確認
    if (document && document.getElementById) {
        var loginForm = document.getElementById('loginForm');
        loginForm.onsubmit = validateForm;
        console.log('イベントリスナーを割り当てた!');
    }

} // init()関数の終わり

// イベントリスナーをウィンドウのロードイベントに割り当てる
window.onload = init;