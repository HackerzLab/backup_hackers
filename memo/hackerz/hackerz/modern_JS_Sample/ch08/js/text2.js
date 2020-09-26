// Script 8.6 - text.js #3

// テキスト領域内でキーが押されたら呼び出される関数。
// 入力できる文字数を制限する
function limitText() {
    'use strict';

    // フォーム要素への参照を取得
    var comments = U.$('comments');

    // 文字数を数える
    var count = comments.value.length;

    // 文字数を報告
    U.$('count').value = count;
    
    // 文字数を超えた分はカット
    if (count > 100) {
        comments.value = comments.value.slice(0,100);
    }
    
} // limitText()関数の終わり

// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';
    U.addEvent(U.$('comments'), 'keyup', limitText);
    U.addEvent(U.$('comments'), 'change', limitText);
};