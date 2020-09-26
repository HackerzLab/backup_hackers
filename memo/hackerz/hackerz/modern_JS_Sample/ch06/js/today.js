// today.js
// 現在の日付と時刻を表示するスクリプト

// ページのロード時に呼び出される関数
function init() {
    
    // strictにする
    'use strict';

    // Dateオブジェクトの作成
    var today = new Date();

    // カスタムメッセージの作成
    var message = '今日の日付けは ' + today.toLocaleDateString();
    message += ' で、時刻は ' + today.getHours() + ':' + today.getMinutes();
    
    // 段落への参照を取得
    var output = document.getElementById('output');
    
    // 段落のinnerTextかtextContentプロパティを更新する 
	if (output.textContent !== undefined) {
		output.textContent = message;
	} else {
		output.innerText = message;
	}
    
} // init()関数の終わり

window.onload = init;