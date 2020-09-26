// contact.js
// メールアドレスとコメントの有効性を検証し、連絡フォームを送信する

// フォームの送信時に呼び出される関数。
// データを検証し、Booleanを返す
function process() {
    'use strict';

    // 検証の有効性を表す変数
    var okay = true;
    
    // フォームへの参照を取得する
    var email = document.getElementById('email');
    var comments = document.getElementById('comments');
    
    // メールアドレスの検証
    if (!email || !email.value 
    || (email.value.length < 6) 
    || (email.value.indexOf('@') == -1)) {
        okay = false;
        alert('有効なメールアドレスを入力してください！');
    }

    // コメントの検証
    if (!comments || !comments.value 
    || (comments.value.indexOf('<') != -1) ) {
        okay = false;
        alert('コメントはHTMLを使わずに入力してください！');
    }
        
    // 状態を返す
    return okay;
    
} // process()関数の終わり

// 初期設定
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = process;
} // init()関数の終わり
window.onload = init;