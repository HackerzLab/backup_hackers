// today.js #2
// 現在の日付けと時刻を示すスクリプト

// HTML要素のテキストの更新に使用する関数。
// 要素のIDとテキストメッセージの２つを引数に取る
function setText(elementId, message) {
    'use strict';
    
    if ( (typeof elementId == 'string')
    && (typeof message == 'string') ) {
    
        // 段落要素への参照を取得
        var output = document.getElementById(elementId);
    
        // 段落要素のinnerTextかtextContentプロパティを更新する
		if (output.textContent !== undefined) {
			output.textContent = message;
		} else {
			output.innerText = message;
		}
    
    } // メインのIFの終わり

} // setText()関数の終わり

// ページがロードされるときに、この関数を呼び出す
function init() {
    'use strict';
    var today = new Date();
    var message = '今日の日付けは ' + today.toLocaleDateString();
    message += ' で、時刻は ' + today.getHours() + ':' + today.getMinutes();

    // ページを更新
    setText('output', message);
    
} // init()関数の終わり
window.onload = init;